import cn from "classnames";
import Image1 from "../../../assets/images/items/image9.png";
import Image2 from "../../../assets/images/items/image10.png";
import Image3 from "../../../assets/images/items/image11.png";
import {GameScreenContent} from "../../GameScreenContent";
import {Image} from "../../Image";
import {STATUS} from "../../../constants/game";
import styles from './ScreenContent5.module.scss'

export function ScreenContent5(props) {
  const {className} = props

  return (
    <GameScreenContent className={className}>
      {({className, status}) => status === STATUS.WIN ? (
        <div className={cn(styles.winImages, className)}>
          <Image className={styles.image2} src={Image2} />
          <Image className={styles.image3} src={Image3} />
        </div>
      ) : (
        <Image className={cn(styles.image1, className)} src={Image1} />
      )}
    </GameScreenContent>
  )
}

ScreenContent5.preloadImages = [Image1, Image2, Image3]