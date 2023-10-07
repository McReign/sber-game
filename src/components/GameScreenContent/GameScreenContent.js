import {useEffect} from "react";
import cn from "classnames";
import {Image} from "../Image";
import {Timer} from "../Timer";
import Image1 from "../../assets/images/effects/image3.svg";
import Image2 from "../../assets/images/items/image2.svg";
import Image3 from "../../assets/images/items/image3.svg";
import Image4 from "../../assets/images/items/image4.svg";
import Image5 from "../../assets/images/effects/image4.svg";
import {useProgress} from "../../contexts/ProgressContext";
import {ScreenContentTemplate} from "../ScreenContentTemplate";
import {useGame} from "../../hooks/useGame";
import {CLICKS, TIME_FOR_CLICKS, NEXT_SCREEN_DELAY, STATUS, TIME_FOR_GETTING_READY} from "../../constants/game";
import {FailPanel} from "./FailPanel";
import {OverlayTimer} from "../OverlayTimer";
import styles from './GameScreenContent.module.scss'

export function GameScreenContent(props) {
  const {className, children} = props
  const {next} = useProgress()
  const {gettingReadyTimeLeft, timeLeft, status, clicked, failsCount, start, restart} = useGame({
    time: TIME_FOR_CLICKS,
    timeForGettingReady: TIME_FOR_GETTING_READY,
    clicks: CLICKS,
  })
  const formattedGettingReadyTimeLeft = gettingReadyTimeLeft + 1000 >= TIME_FOR_GETTING_READY ?
    TIME_FOR_GETTING_READY
    : gettingReadyTimeLeft + 1000
  const greyscaleClassNames = cn(
    styles.greyscaleTarget,
    status !== STATUS.WIN && styles.greyscale,
    clicked && styles.partialGreyscale,
  )

  function renderChildren() {
    const props = {status, className: greyscaleClassNames}
    return typeof children === 'function' ? children(props) : children
  }

  useEffect(() => {
    if (status === STATUS.WIN) {
      setTimeout(next, NEXT_SCREEN_DELAY)
    }
  }, [status])

  useEffect(() => {
    start()
  }, [])

  return (
    <ScreenContentTemplate className={className}>
      <ScreenContentTemplate.Images className={greyscaleClassNames}>
        <Image className={styles.image1} src={Image1} />
        <Image className={styles.image2} src={Image2} />
        <Image className={styles.image3} src={Image3} />
        <Image className={styles.image4} src={Image4} />
        <Image className={styles.image5} src={Image5} />
      </ScreenContentTemplate.Images>
      <ScreenContentTemplate.Content className={cn(styles.content, status === STATUS.PLAYING && styles.playing)}>
        <div className={styles.contentInner}>
          <Timer time={timeLeft} />
          {status === STATUS.FAIL && <FailPanel className={styles.failPanel} failsCount={failsCount} onRetry={restart} />}
        </div>
        {status !== STATUS.FAIL && renderChildren()}
      </ScreenContentTemplate.Content>
      {status === STATUS.GETTING_READY && <OverlayTimer time={formattedGettingReadyTimeLeft} />}
    </ScreenContentTemplate>
  )
}