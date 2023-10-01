import cn from "classnames";
import {Text} from "../../Text";
import {Button} from "../../Button";
import {Image} from "../../Image";
import Image1 from "../../../assets/images/effects/image1.svg";
import Image2 from "../../../assets/images/effects/image2.svg";
import Image3 from "../../../assets/images/items/image21.svg";
import Image4 from "../../../assets/images/items/image22.png";
import {useProgress} from "../../../contexts/ProgressContext";
import {ScreenContentTemplate} from "../../ScreenContentTemplate";
import styles from './ScreenContent11.module.scss'

export function ScreenContent11(props) {
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
          <Text as='span' weight='bold'>Ты сможешь зарабатывать до 63 000 руб. в месяц до вычета налога.</Text>
          <br/>
          <Text as='span'>Зарплаты хватит и на поездки, и на насыщенный досуг!</Text>
          <br/>
          <Text as='span'>А приятные бонусы от компании дополнят удовлетворенность своей работой.</Text>
        </Text>
        <div className={styles.buttons}>
          <Button onClick={next}>Супер</Button>
        </div>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  )
}