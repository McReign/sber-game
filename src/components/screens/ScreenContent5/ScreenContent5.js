import Image1 from "../../../assets/images/items/image9.png";
import Image2 from "../../../assets/images/items/image10.png";
import Image3 from "../../../assets/images/items/image11.png";
import {GameScreenContent} from "../../GameScreenContent";
import {Image} from "../../Image";
import styles from './ScreenContent5.module.scss'

export function ScreenContent5(props) {
  const {className} = props

  return (
    <GameScreenContent
      className={className}
      defaultContent={<Image className={styles.image1} src={Image1} />}
      winContent={(
        <div className={styles.winImages}>
          <Image className={styles.image2} src={Image2} />
          <Image className={styles.image3} src={Image3} />
        </div>
      )}
    />
  )
}

ScreenContent5.preloadImages = [Image1, Image2, Image3]