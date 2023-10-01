import cn from "classnames";
import {Text} from "../../Text";
import {Button} from "../../Button";
import {Image} from "../../Image";
import Image1 from "../../../assets/images/effects/image1.svg";
import Image2 from "../../../assets/images/effects/image2.svg";
import Image3 from "../../../assets/images/items/image16.svg";
import Image4 from "../../../assets/images/items/image17.png";
import {useProgress} from "../../../contexts/ProgressContext";
import {ScreenContentTemplate} from "../../ScreenContentTemplate";
import styles from './ScreenContent8.module.scss'

export function ScreenContent8(props) {
  const {className} = props
  const {next} = useProgress()

  return (
    <ScreenContentTemplate className={cn(styles.wrapper, className)}>
      <ScreenContentTemplate.Images>
        <Image className={styles.image1} src={Image1} />
        <Image className={styles.image2} src={Image2} />
        <Image className={styles.image3} src={Image3} />
        <Image className={styles.image4} src={Image4} />
      </ScreenContentTemplate.Images>
      <ScreenContentTemplate.Content>
        <Text className={styles.text}>
          <Text as='span'>Отзывчивый коллектив — это когда задаешь вопрос и получаешь развернутый ответ от нескольких кураторов!</Text>
          <br/>
          <Text as='span' weight='bold'>Помни, тебя всегда поддержат. Так все и работает на Sberseasons ;)</Text>
        </Text>
        <div className={styles.buttons}>
          <Button onClick={next}>Мне нравится</Button>
        </div>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  )
}