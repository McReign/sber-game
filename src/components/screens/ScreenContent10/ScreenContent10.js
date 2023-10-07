import Image1 from "../../../assets/images/items/image19.png";
import Image2 from "../../../assets/images/items/image20.png";
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
      defaultContent={<Image className={styles.image1} src={Image1} />}
      winContent={(
        <div className={styles.winWrapper}>
          <Notification className={styles.notification} time='Сейчас'>
            <Text weight='medium'>Пополнение на сумму</Text>
            <Text weight='bold'>55 332 руб.</Text>
          </Notification>
          <Image className={styles.image2} src={Image2} />
        </div>
      )}
    />
  )
}

ScreenContent10.preloadImages = [Image1, Image2]