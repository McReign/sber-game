import cn from "classnames";
import Image1 from "../../../assets/images/items/image5.svg";
import Image2 from "../../../assets/images/items/image6.svg";
import {GameScreenContent} from "../../GameScreenContent";
import {Image} from "../../Image";
import styles from './ScreenContent3.module.scss'
import {STATUS} from "../../../constants/game";

export function ScreenContent3(props) {
  const {className} = props

  return (
    <GameScreenContent className={className}>
      {({className, status}) => status === STATUS.WIN ? (
        <Image className={cn(styles.image2, className)} src={Image2} />
      ) : (
        <Image className={cn(styles.image1, className)} src={Image1} />
      )}
    </GameScreenContent>
  )
}

ScreenContent3.preloadImages = [Image1, Image2]