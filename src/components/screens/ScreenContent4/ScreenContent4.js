import cn from "classnames";
import {Text} from "../../Text";
import {Button} from "../../Button";
import {Image} from "../../Image";
import Image1 from "../../../assets/images/effects/image1.svg";
import Image2 from "../../../assets/images/effects/image2.svg";
import Image3 from "../../../assets/images/items/image7.svg";
import Image4 from "../../../assets/images/items/image8.png";
import {useProgress} from "../../../contexts/ProgressContext";
import {ScreenContentTemplate} from "../../ScreenContentTemplate";
import styles from './ScreenContent4.module.scss'

export function ScreenContent4(props) {
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
          <Text as='span' weight='bold'>Стажировка в Сбере — это про удобный график.</Text>
          <br/>
          <Text as='span'>Ты можешь брать выходные и работать от 20 часов в неделю, сидя в нашем современном «умном» офисе, дома или в кафе.</Text>
          <br/>
          <Text as='span'>Кстати, в офисе тоже можно отдохнуть: есть зоны отдыха, спортзал, баланс борды и снеки.</Text>
        </Text>
        <div className={styles.buttons}>
          <Button onClick={next}>Как же удобно!</Button>
        </div>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  )
}