import {Panel} from "../Panel";
import {Text} from "../Text";
import {Button} from "../Button";
import {Title} from "../Title";
import {openVacancies} from "../../utils/openVacancies";
import styles from './FailPanel.module.scss'

export function FailPanel(props) {
  const {className, failsCount, onRetry} = props

  if (failsCount > 1) {
    return (
      <div className={className}>
        <Panel>
          <Title variant='secondary'>Упс!</Title>
          <Text className={styles.text}>
            Тапай ещё чаще или начни карьеру вместе с крупнейшим работодателем прямо сейчас.
          </Text>
        </Panel>
        <div className={styles.buttons}>
          <Button className={styles.button} variant='secondary' onClick={openVacancies}>Откликнуться</Button>
          <Button className={styles.button} variant='tertiary' size='sm' onClick={onRetry}>
            Ещё раз
            <svg className={styles.icon} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.3536 10.8839C11.8654 10.3957 11.8654 9.60427 12.3536 9.11612C12.8418 8.62796 13.6332 8.62796 14.1214 9.11612L20.0053 15L14.1214 20.8839C13.6332 21.372 12.8418 21.372 12.3536 20.8839C11.8654 20.3957 11.8654 19.6043 12.3536 19.1161L16.4697 15L12.3536 10.8839Z" fill="currentColor"/>
            </svg>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <Panel className={className}>
        <Title variant='secondary'>Упс!</Title>
        <Text className={styles.text}>
          Попробуй тапать чаще.
        </Text>
      </Panel>
      <div className={styles.buttons}>
        <Button className={styles.button} variant='secondary' onClick={onRetry}>Ещё раз</Button>
      </div>
    </div>
  )
}
