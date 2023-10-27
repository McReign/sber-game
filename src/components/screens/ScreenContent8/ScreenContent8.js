import {Text} from "../../Text";
import {Button} from "../../Button";
import {Image} from "../../Image";
import Image1 from "../../../assets/images/effects/image1.svg";
import Image2 from "../../../assets/images/effects/image3.svg";
import Image3 from "../../../assets/images/effects/image18.png";
import Image4 from "../../../assets/images/effects/image19.png";
import {useProgress} from "../../../contexts/ProgressContext";
import {ScreenContentTemplate} from "../../ScreenContentTemplate";
import {Panel} from "../../Panel";
import {Title} from "../../Title";
import styles from './ScreenContent8.module.scss'

export function ScreenContent8(props) {
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
          <Text className={styles.textWrapper}>
            <Text as='span'>Отзывчивый коллектив&nbsp;— это&nbsp;когда задаешь вопрос и&nbsp;получаешь развернутый ответ от&nbsp;нескольких кураторов!</Text>
          </Text>
          <Title variant='secondary'>Помни, тебя всегда поддержат.{'\n'}Так&nbsp;все и работает на&nbsp;Sberseasons ;)</Title>
        </Panel>
        <div className={styles.buttons}>
          <Button onClick={next}>Мне нравится</Button>
        </div>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  )
}

ScreenContent8.preloadImages = [Image1, Image2, Image3, Image4]