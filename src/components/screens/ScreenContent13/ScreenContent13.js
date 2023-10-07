import {Text} from "../../Text";
import {Button} from "../../Button";
import {Image} from "../../Image";
import Image1 from "../../../assets/images/effects/image1.svg";
import Image2 from "../../../assets/images/effects/image2.svg";
import Image3 from "../../../assets/images/items/image1.svg";
import Image4 from "../../../assets/images/items/image28.png";
import {useProgress} from "../../../contexts/ProgressContext";
import {ScreenContentTemplate} from "../../ScreenContentTemplate";
import styles from './ScreenContent13.module.scss'

export function ScreenContent13(props) {
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
          <Text as='span' weight='bold'>Вечный стажер — это не про Sberseasons.</Text>
          <br/>
          <Text as='span'>Прояви свой потенциал за 3-6 месяцев и получи шанс перейти в штат!</Text>
        </Text>
        <div className={styles.buttons}>
          <Button onClick={next}>Мне подходит!</Button>
        </div>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  )
}

ScreenContent13.preloadImages = [Image1, Image2, Image3, Image4]