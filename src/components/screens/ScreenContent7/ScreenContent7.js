import Image1 from "../../../assets/images/items/image14.png";
import Image2 from "../../../assets/images/items/image15.png";
import {GameScreenContent} from "../../GameScreenContent";
import {Image} from "../../Image";
import styles from './ScreenContent7.module.scss'

export function ScreenContent7(props) {
  const {className} = props

  return (
    <GameScreenContent
      className={className}
      defaultContent={<Image className={styles.image1} src={Image1} />}
      winContent={<Image className={styles.image2} src={Image2} />}
    />
  )
}

ScreenContent7.preloadImages = [Image1, Image2]