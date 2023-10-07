import {Title} from "../../Title";
import {Text} from "../../Text";
import {Button} from "../../Button";
import {Image} from "../../Image";
import Image1 from "../../../assets/images/effects/image1.svg";
import Image2 from "../../../assets/images/effects/image2.svg";
import Image3 from "../../../assets/images/items/image1.svg";
import {useProgress} from "../../../contexts/ProgressContext";
import {ScreenContentTemplate} from "../../ScreenContentTemplate";
import styles from './ScreenContent1.module.scss'

export function ScreenContent1(props) {
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
        <Title>
          Твоя карьера — в&nbsp;твоих руках
        </Title>
        <Text className={styles.text}>
          <Text as='span'>Работа не может быть идеальной, от тебя ничего не зависит, а коллеги — далеко не друзья.</Text>
          <br/>
          <Text as='span'>Кто сказал все эти глупости? Точно не мы :)</Text>
          <br/>
          <Text as='span'>В Сбере всё иначе, круче и ярче! Играй и добавляй красок!</Text>
        </Text>
        <div className={styles.buttons}>
          <Button onClick={next}>Что нужно делать?</Button>
        </div>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  )
}