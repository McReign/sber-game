import cn from "classnames";
import Image1 from "../../../assets/images/items/image19.png";
import Image2 from "../../../assets/images/items/image20.png";
import {GameScreenContent} from "../../GameScreenContent";
import {Image} from "../../Image";
import {STATUS} from "../../../constants/game";
import {Notification} from "../../Notification";
import {Text} from "../../Text";
import styles from './ScreenContent10.module.scss'

export function ScreenContent10(props) {
  const {className} = props

  return (
    <GameScreenContent className={className}>
      {({className, status}) => status === STATUS.WIN ? (
        <div className={styles.winWrapper}>
          <Notification className={styles.notification} time='Сейчас'>
            <Text weight='medium'>Пополнение на сумму</Text>
            <Text weight='bold'>55 332 руб.</Text>
          </Notification>
          <Image className={cn(styles.image2, className)} src={Image2} />
        </div>
      ) : (
        <Image className={cn(styles.image1, className)} src={Image1} />
      )}
    </GameScreenContent>
  )
}

ScreenContent10.preloadImages = [Image1, Image2]