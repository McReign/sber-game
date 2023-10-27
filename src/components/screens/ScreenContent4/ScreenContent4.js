import {Text} from "../../Text";
import {Button} from "../../Button";
import {Image} from "../../Image";
import Image1 from "../../../assets/images/effects/image11.svg";
import Image2 from "../../../assets/images/effects/image3.svg";
import Image3 from "../../../assets/images/effects/image12.png";
import Image4 from "../../../assets/images/effects/image13.png";
import {useProgress} from "../../../contexts/ProgressContext";
import {ScreenContentTemplate} from "../../ScreenContentTemplate";
import {Panel} from "../../Panel";
import {Title} from "../../Title";
import styles from './ScreenContent4.module.scss'

export function ScreenContent4(props) {
  const {className} = props
  const {next} = useProgress()

  return (
    <ScreenContentTemplate className={className}>
      <ScreenContentTemplate.Images>
        <Image className={styles.image1} src={Image1} />
        <Image className={styles.image2} src={Image2} />
        <Image className={styles.image3} src={Image3} />
        <Image className={styles.image4} src={Image4} />
      </ScreenContentTemplate.Images>
      <ScreenContentTemplate.Content className={styles.content}>
        <Panel className={styles.panel}>
          <Title variant='secondary'>Стажировка в Сбере —{'\n'}это про удобный график.</Title>
          <Text className={styles.textWrapper}>
            <Text as='span'>Ты можешь брать выходные и&nbsp;работать от 20 часов в неделю, сидя в&nbsp;нашем современном «умном» офисе, дома или&nbsp;в&nbsp;кафе.</Text>
            <br/>
            <Text as='span'>Кстати, в офисе тоже можно отдохнуть: есть зоны отдыха, спортзал, баланс борды и&nbsp;снеки.</Text>
          </Text>
        </Panel>
        <div className={styles.buttons}>
          <Button onClick={next}>Как же удобно!</Button>
        </div>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  )
}

ScreenContent4.preloadImages = [Image1, Image2, Image3, Image4]