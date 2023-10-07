import cn from "classnames";
import Image1 from "../../../assets/images/items/image23.png";
import Image2 from "../../../assets/images/items/image24.png";
import Image3 from "../../../assets/images/items/image25.png";
import Image4 from "../../../assets/images/items/image26.png";
import Image5 from "../../../assets/images/items/image27.png";
import {GameScreenContent} from "../../GameScreenContent";
import {Image} from "../../Image";
import {STATUS} from "../../../constants/game";
import styles from './ScreenContent12.module.scss'

export function ScreenContent12(props) {
  const {className} = props

  return (
    <GameScreenContent className={className}>
      {({className, status}) => status === STATUS.WIN ? (
        <div className={styles.winWrapper}>
          <Image className={cn(styles.image2, className)} src={Image2} />
          <Image className={cn(styles.image3, className)} src={Image3} />
          <Image className={cn(styles.image4, className)} src={Image4} />
          <Image className={cn(styles.image5, className)} src={Image5} />
        </div>
      ) : (
        <Image className={cn(styles.image1, className)} src={Image1} />
      )}
    </GameScreenContent>
  )
}

ScreenContent12.preloadImages = [Image1, Image2, Image3, Image4, Image5]