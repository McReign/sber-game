import {Text} from "../../Text";
import {Button} from "../../Button";
import {Image} from "../../Image";
import Image1 from "../../../assets/images/effects/image1.svg";
import Image2 from "../../../assets/images/effects/image2.svg";
import Image3 from "../../../assets/images/items/image1.svg";
import Image4 from "../../../assets/images/items/image18.png";
import {useProgress} from "../../../contexts/ProgressContext";
import {ScreenContentTemplate} from "../../ScreenContentTemplate";
import styles from './ScreenContent9.module.scss'

export function ScreenContent9(props) {
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
          <Text as='span'>Тебе уже открылись 3 классных факта о стажировке в Сбере.</Text>
          <br/>
          <Text as='span'>Можешь прямо сейчас оставить отклик или открыть еще 2 факта.</Text>
        </Text>
        <div className={styles.buttons}>
          <Button className={styles.button}>Откликнуться</Button>
          <Button className={styles.button} variant='secondary' onClick={next}>Ещё факты</Button>
        </div>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  )
}