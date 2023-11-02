import {Text} from "../../Text";
import {Button} from "../../Button";
import {Image} from "../../Image";
import Image1 from "../../../assets/images/effects/image1.png";
import Image2 from "../../../assets/images/effects/image28.png";
import VacanciesQR from "../../../assets/images/qrs/vacanciesQR.png";
import {ScreenContentTemplate} from "../../ScreenContentTemplate";
import {BackdropPanel} from "../../BackdropPanel";
import {List} from "../../List";
import {useProgress} from "../../../contexts/ProgressContext";
import styles from './ScreenContent14.module.scss'

export function ScreenContent14(props) {
  const {className} = props
  const {restart} = useProgress()

  const listItems = [
    'Бесплатный и безлимитный психолог',
    'Сеанс групповой медитации раз в\xa0неделю',
    'Массажные кресла повсюду, чтобы\xa0размяться',
    'Приставка? Или спортзал?\nВ офисе есть и то, и\xa0другое!',
    'На работу можно в тапочках — согласовывай удаленку и иногда работай из дома',
  ]

  function handleRestart() {
    restart()
  }

  return (
    <ScreenContentTemplate className={className}>
      <ScreenContentTemplate.Images>
        <Image className={styles.image1} src={Image1} />
        <Image className={styles.image2} src={Image2} />
      </ScreenContentTemplate.Images>
      <ScreenContentTemplate.Content className={styles.content}>
        <div className={styles.contentInner}>
          <Text className={styles.textWrapper}>
            <Text as='span'>Теперь ты знаешь о стажировке в&nbsp;Сбере почти всё.</Text>
            <br/>
            <Text as='span' weight='bold'>Начни карьеру вместе{'\n'}с крупнейшим работодателем прямо сейчас!</Text>
          </Text>
          <div className={styles.qrWrapper}>
            <Image className={styles.qr} src={VacanciesQR} alt='QR' />
          </div>
          <div className={styles.buttons}>
            <Button variant='secondary' onClick={handleRestart}>Играть заново</Button>
          </div>
        </div>
        <BackdropPanel className={styles.panel}>
          <Text weight='bold'>А ещё у нас есть:</Text>
          <List className={styles.list} items={listItems} />
        </BackdropPanel>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  )
}

ScreenContent14.preloadImages = [VacanciesQR]