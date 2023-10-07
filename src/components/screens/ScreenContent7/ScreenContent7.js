import cn from "classnames";
import Image1 from "../../../assets/images/items/image14.png";
import Image2 from "../../../assets/images/items/image15.png";
import {GameScreenContent} from "../../GameScreenContent";
import {Image} from "../../Image";
import {STATUS} from "../../../constants/game";
import styles from './ScreenContent7.module.scss'

export function ScreenContent7(props) {
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

ScreenContent7.preloadImages = [Image1, Image2]