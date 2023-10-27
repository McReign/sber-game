import {Text} from "../../Text";
import {Button} from "../../Button";
import {Image} from "../../Image";
import Image1 from "../../../assets/images/effects/image1.svg";
import Image2 from "../../../assets/images/effects/image3.svg";
import Image3 from "../../../assets/images/effects/image26.png";
import Image4 from "../../../assets/images/effects/image27.png";
import {useProgress} from "../../../contexts/ProgressContext";
import {ScreenContentTemplate} from "../../ScreenContentTemplate";
import {Panel} from "../../Panel";
import {Title} from "../../Title";
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
        <Panel className={styles.panel}>
          <Title variant='secondary'>Вечный стажер&nbsp;— это не про Sberseasons.</Title>
          <Text className={styles.textWrapper}>
            <Text as='span'>
              Прояви свой потенциал
              за&nbsp;<Text as='span' wrap='nowrap'>3-6</Text>&nbsp;месяцев и&nbsp;получи шанс
              перейти в&nbsp;штат!
            </Text>
          </Text>
        </Panel>
        <div className={styles.buttons}>
          <Button onClick={next}>Мне подходит!</Button>
        </div>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  )
}

ScreenContent13.preloadImages = [Image1, Image2, Image3, Image4]