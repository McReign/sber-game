import {Panel} from "../../Panel";
import {Text} from "../../Text";
import {Button} from "../../Button";
import {Image} from "../../Image";
import Image1 from "../../../assets/images/effects/image1.svg";
import Image2 from "../../../assets/images/effects/image2.svg";
import Image3 from "../../../assets/images/items/image1.svg";
import {useProgress} from "../../../contexts/ProgressContext";
import {ScreenContentTemplate} from "../../ScreenContentTemplate";
import styles from './ScreenContent2.module.scss'

export function ScreenContent2(props) {
  const {className} = props
  const {next} = useProgress()

  return (
    <ScreenContentTemplate className={className}>
      <ScreenContentTemplate.Images>
        <Image className={styles.image1} src={Image1} />
        <Image className={styles.image2} src={Image2} />
        <Image className={styles.image3} src={Image3} />
      </ScreenContentTemplate.Images>
      <ScreenContentTemplate.Content className={styles.content}>
        <Panel>
          <Text className={styles.text}>
            <Text as='span' weight='bold'>Открой все 5 фактов о&nbsp;Sberseasons.</Text>
            <br/>
            <Text as='span'>Тапай по экрану как можно чаще, сколько именно раз — секрет 😉</Text>
            <br/>
            <Text as='span'>Разомни пальцы!{'\n'}У тебя 7&nbsp;секунд на&nbsp;уровень — справишься быстрее?</Text>
            <br/>
            <Text as='span'>Давай вместе превратим унылые предрассудки в&nbsp;красочную реальность!</Text>
          </Text>
          <div className={styles.buttons}>
            <Button className={styles.button} onClick={next}>Старт</Button>
          </div>
        </Panel>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  )
}

ScreenContent2.preloadImages = [Image1, Image2, Image3]