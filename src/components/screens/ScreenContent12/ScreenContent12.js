import Image1 from "../../../assets/images/items/image23.png";
import Image2 from "../../../assets/images/items/image24.png";
import Image3 from "../../../assets/images/items/image25.png";
import Image4 from "../../../assets/images/items/image26.png";
import Image5 from "../../../assets/images/items/image27.png";
import {GameScreenContent} from "../../GameScreenContent";
import {Image} from "../../Image";
import styles from './ScreenContent12.module.scss'

export function ScreenContent12(props) {
  const {className} = props

  return (
    <GameScreenContent
      className={className}
      defaultContent={<Image className={styles.image1} src={Image1} />}
      winContent={(
        <div className={styles.winWrapper}>
          <Image className={styles.image2} src={Image2} />
          <Image className={styles.image3} src={Image3} />
          <Image className={styles.image4} src={Image4} />
          <Image className={styles.image5} src={Image5} />
        </div>
      )}
    />
  )
}

ScreenContent12.preloadImages = [Image1, Image2, Image3, Image4, Image5]