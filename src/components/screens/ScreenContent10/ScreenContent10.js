import cn from 'classnames'
import Image1 from "../../../assets/images/items/image3.png";
import Image2 from "../../../assets/images/items/image4.png";
import Image3 from "../../../assets/images/items/image5.png";
import Image4 from "../../../assets/images/items/image6.png";
import {GameScreenContent} from "../../GameScreenContent";
import {Image} from "../../Image";
import {Notification} from "../../Notification";
import {Text} from "../../Text";
import styles from './ScreenContent10.module.scss'

export function ScreenContent10(props) {
  const {className} = props

  return (
    <GameScreenContent
      className={className}
      defaultContent={(className) => <Image className={cn(styles.image1, className)} src={Image1} />}
      winContent={(className) => (
        <div className={cn(styles.winWrapper, className)}>
          <Notification className={styles.notification} time='Сейчас'>
            <Text weight='medium'>Пополнение на сумму</Text>
            <Text weight='bold'>55 332 руб.</Text>
          </Notification>
          <div className={styles.image2Wrapper}>
            <Image className={styles.image2} src={Image2} />
            <Image className={styles.image4} src={Image4} />
            <Image className={styles.image3} src={Image3} />
          </div>
        </div>
      )}
    />
  )
}

ScreenContent10.preloadImages = [Image1, Image2, Image3, Image4]