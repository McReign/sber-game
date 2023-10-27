import Image1 from "../../../assets/images/items/image1.png";
import Image2 from "../../../assets/images/items/image2.png";
import {GameScreenContent} from "../../GameScreenContent";
import {Image} from "../../Image";
import styles from './ScreenContent3.module.scss'

export function ScreenContent3(props) {
  const {className} = props

  return (
    <GameScreenContent
      className={className}
      defaultContent={<Image className={styles.image1} src={Image1} />}
      winContent={<Image className={styles.image2} src={Image2} />}
    />
  )
}

ScreenContent3.preloadImages = [Image1, Image2]