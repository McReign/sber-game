import {Title} from "../../Title";
import {Text} from "../../Text";
import {Button} from "../../Button";
import {Image} from "../../Image";
import Image1 from "../../../assets/images/effects/image1.svg";
import Image2 from "../../../assets/images/effects/image2.svg";
import Image3 from "../../../assets/images/effects/image3.svg";
import Image4 from "../../../assets/images/effects/image4.png";
import Image5 from "../../../assets/images/effects/image5.png";
import {useProgress} from "../../../contexts/ProgressContext";
import {ScreenContentTemplate} from "../../ScreenContentTemplate";
import styles from './ScreenContent1.module.scss'
import {Panel} from "../../Panel";

export function ScreenContent1(props) {
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
          <Title>Твоя карьера —{'\n'}в&nbsp;твоих руках</Title>
          <Text className={styles.textWrapper}>
            <Text as='span' className={styles.text}>
              Работа не может быть идеальной,{'\n'}от&nbsp;тебя ничего не зависит,{'\n'}а коллеги — далеко не друзья.
            </Text>
            <br/>
            <Text as='span' className={styles.text}>
              Кто сказал все эти глупости?{'\n'}Точно не мы :)
            </Text>
            <br/>
            <Text as='span' className={styles.text}>
              В Сбере всё иначе, круче и ярче!{'\n'}Играй и добавляй красок!
            </Text>
          </Text>
        </Panel>
        <div className={styles.buttons}>
          <Button onClick={next}>Что нужно делать?</Button>
        </div>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  )
}

ScreenContent1.preloadImages = [Image1, Image2, Image3, Image4, Image5]