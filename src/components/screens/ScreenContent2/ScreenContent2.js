import {Panel} from "../../Panel";
import {Text} from "../../Text";
import {Button} from "../../Button";
import {Image} from "../../Image";
import Image1 from "../../../assets/images/effects/image1.svg";
import Image2 from "../../../assets/images/effects/image3.svg";
import Image3 from "../../../assets/images/effects/image6.png";
import Image4 from "../../../assets/images/effects/image7.png";
import {useProgress} from "../../../contexts/ProgressContext";
import {ScreenContentTemplate} from "../../ScreenContentTemplate";
import styles from './ScreenContent2.module.scss'
import {Title} from "../../Title";

export function ScreenContent2(props) {
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
          <Title variant='secondary'>
            Открой все 5&nbsp;фактов{'\n'}о&nbsp;Sberseasons.
          </Title>
          <Text className={styles.textWrapper}>
            <Text as='span'>Тапай по экрану как можно чаще, сколько именно раз&nbsp;—&nbsp;секрет</Text>
            <br/>
            <Text as='span'>Разомни пальцы!{'\n'}У тебя 7&nbsp;секунд на&nbsp;уровень&nbsp;— справишься быстрее?</Text>
            <br/>
            <Text as='span'>Давай вместе превратим унылые предрассудки в&nbsp;красочную реальность!</Text>
          </Text>
        </Panel>
        <div className={styles.buttons}>
          <Button onClick={next}>Старт</Button>
        </div>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  )
}

ScreenContent2.preloadImages = [Image1, Image2, Image3, Image4]