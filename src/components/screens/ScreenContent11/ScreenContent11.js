import {Text} from "../../Text";
import {Button} from "../../Button";
import {Image} from "../../Image";
import Image1 from "../../../assets/images/effects/image1.svg";
import Image2 from "../../../assets/images/effects/image2.svg";
import Image3 from "../../../assets/images/items/image21.svg";
import Image4 from "../../../assets/images/items/image22.png";
import {useProgress} from "../../../contexts/ProgressContext";
import {ScreenContentTemplate} from "../../ScreenContentTemplate";
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
      </ScreenContentTemplate.Images>
      <ScreenContentTemplate.Content className={styles.content}>
        <Text className={styles.text}>
          <Text as='span' weight='bold'>Ты сможешь зарабатывать до&nbsp;63&nbsp;000&nbsp;руб. в&nbsp;месяц до&nbsp;вычета налога.</Text>
          <br/>
          <Text as='span'>Зарплаты хватит и&nbsp;на&nbsp;поездки, и&nbsp;на&nbsp;насыщенный досуг!</Text>
          <br/>
          <Text as='span'>А приятные бонусы от&nbsp;компании дополнят удовлетворенность своей работой.</Text>
        </Text>
        <div className={styles.buttons}>
          <Button onClick={next}>Супер</Button>
        </div>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  )
}

ScreenContent11.preloadImages = [Image1, Image2, Image3, Image4]