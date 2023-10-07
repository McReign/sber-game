import {Text} from "../../Text";
import {Button} from "../../Button";
import {Image} from "../../Image";
import Image1 from "../../../assets/images/effects/image1.svg";
import Image2 from "../../../assets/images/effects/image5.svg";
import {ScreenContentTemplate} from "../../ScreenContentTemplate";
import {BackdropPanel} from "../../BackdropPanel";
import {List} from "../../List";
import styles from './ScreenContent14.module.scss'

export function ScreenContent14(props) {
  const {className} = props

  const listItems = [
    'Бесплатный и безлимитный психолог',
    'Сеанс групповой медитации раз в неделю',
    'Массажные кресла повсюду, чтобы размяться',
    'СберУниверситет, Виртуальная школа и библиотеки дадут недостающие знания в новых профессиях',
    'Приставка? Или спортзал? В офисе есть и то, и другое!',
    'На работу можно в тапочках — согласовывай удаленку и иногда работай из дома',
  ]

  return (
    <ScreenContentTemplate className={className}>
      <ScreenContentTemplate.Images>
        <Image className={styles.image1} src={Image1} />
        <Image className={styles.image2} src={Image2} />
      </ScreenContentTemplate.Images>
      <ScreenContentTemplate.Content className={styles.content}>
        <div className={styles.contentInner}>
          <Text className={styles.text}>
            <Text as='span'>Теперь ты знаешь о стажировке в Сбере почти всё.</Text>
            <br/>
            <Text as='span' weight='bold'>Начни карьеру вместе с крупнейшим работодателем прямо сейчас!</Text>
          </Text>
          <div className={styles.buttons}>
            <Button>Откликнуться</Button>
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