import {Text} from "../../Text";
import {Button} from "../../Button";
import {Image} from "../../Image";
import Image1 from "../../../assets/images/effects/image20.png";
import Image2 from "../../../assets/images/effects/image21.png";
import Image3 from "../../../assets/images/effects/image22.png";
import Image4 from "../../../assets/images/effects/image23.png";
import {useProgress} from "../../../contexts/ProgressContext";
import {ScreenContentTemplate} from "../../ScreenContentTemplate";
import {openVacancies} from "../../../utils/openVacancies";
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
        <Text className={styles.textWrapper}>
          <Text as='span'>Тебе уже открылись 3 классных факта о&nbsp;стажировке в&nbsp;Сбере.</Text>
          <br/>
          <Text as='span'>Можешь прямо сейчас оставить отклик или&nbsp;открыть еще 2 факта.</Text>
        </Text>
        <div className={styles.buttons}>
          <Button className={styles.button} variant='secondary' size='sm' onClick={openVacancies}>Откликнуться</Button>
          <Button className={styles.button} variant='tertiary' size='sm' onClick={next}>
            Ещё факты
            <svg className={styles.icon} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.3536 10.8839C11.8654 10.3957 11.8654 9.60427 12.3536 9.11612C12.8418 8.62796 13.6332 8.62796 14.1214 9.11612L20.0053 15L14.1214 20.8839C13.6332 21.372 12.8418 21.372 12.3536 20.8839C11.8654 20.3957 11.8654 19.6043 12.3536 19.1161L16.4697 15L12.3536 10.8839Z" fill="currentColor"/>
            </svg>
          </Button>
        </div>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  )
}

ScreenContent9.preloadImages = [Image1, Image2, Image3, Image4]