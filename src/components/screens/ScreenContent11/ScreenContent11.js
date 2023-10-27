import {Text} from "../../Text";
import {Button} from "../../Button";
import {Image} from "../../Image";
import Image1 from "../../../assets/images/effects/image1.svg";
import Image2 from "../../../assets/images/effects/image14.svg";
import Image3 from "../../../assets/images/effects/image15.svg";
import Image4 from "../../../assets/images/effects/image24.png";
import Image5 from "../../../assets/images/effects/image25.png";
import {useProgress} from "../../../contexts/ProgressContext";
import {ScreenContentTemplate} from "../../ScreenContentTemplate";
import {Panel} from "../../Panel";
import {Title} from "../../Title";
import styles from './ScreenContent11.module.scss'

export function ScreenContent11(props) {
  const {className} = props
  const {next} = useProgress()

  return (
    <ScreenContentTemplate className={className}>
      <ScreenContentTemplate.Images>
        <Image className={styles.image1} src={Image1} />
        <Image className={styles.image2} src={Image2} />
        <Image className={styles.image3} src={Image3} />
        <Image className={styles.image4} src={Image4} />
        <Image className={styles.image5} src={Image5} />
      </ScreenContentTemplate.Images>
      <ScreenContentTemplate.Content className={styles.content}>
        <Panel className={styles.panel}>
          <Title variant='secondary'>Ты сможешь зарабатывать до&nbsp;63&nbsp;000&nbsp;руб. в&nbsp;месяц до&nbsp;вычета налога.</Title>
          <Text className={styles.textWrapper}>
            <Text as='span'>Зарплаты хватит и&nbsp;на&nbsp;поездки, и&nbsp;на&nbsp;насыщенный досуг!</Text>
            <br/>
            <Text as='span'>А приятные бонусы от&nbsp;компании дополнят удовлетворенность своей работой.</Text>
          </Text>
        </Panel>
        <div className={styles.buttons}>
          <Button onClick={next}>Супер</Button>
        </div>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  )
}

ScreenContent11.preloadImages = [Image1, Image2, Image3, Image4, Image5]