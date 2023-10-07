import {Text} from "../../Text";
import {Button} from "../../Button";
import {Image} from "../../Image";
import Image1 from "../../../assets/images/effects/image1.svg";
import Image2 from "../../../assets/images/effects/image2.svg";
import Image3 from "../../../assets/images/items/image12.svg";
import Image4 from "../../../assets/images/items/image13.png";
import {useProgress} from "../../../contexts/ProgressContext";
import {ScreenContentTemplate} from "../../ScreenContentTemplate";
import styles from './ScreenContent6.module.scss'

export function ScreenContent6(props) {
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
          <Text as='span' weight='bold'>На стажировке ты сможешь легко совмещать работу, учебу и&nbsp;личную жизнь.</Text>
          <br/>
          <Text as='span'>Сессия, важные пары или поездка с&nbsp;друзьями? На все это у&nbsp;тебя будут свободные дни!</Text>
        </Text>
        <div className={styles.buttons}>
          <Button onClick={next}>Это по мне</Button>
        </div>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  )
}

ScreenContent6.preloadImages = [Image1, Image2, Image3, Image4]