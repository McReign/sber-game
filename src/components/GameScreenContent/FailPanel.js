import cn from "classnames";
import {Panel} from "../Panel";
import {Text} from "../Text";
import {Button} from "../Button";
import styles from './FailPanel.module.scss'

export function FailPanel(props) {
  const {className, failsCount, onRetry} = props

  if (failsCount > 1) {
    return (
      <Panel className={className}>
        <Text className={styles.failText}>
          <Text as='span' weight='bold'>Упс!</Text>
          <br/>
          <Text as='span'>Тапай ещё чаще или начни карьеру вместе с крупнейшим работодателем прямо сейчас.</Text>
        </Text>
        <div className={styles.buttons}>
          <Button className={cn(styles.button, styles.md)}>Откликнуться</Button>
          <Button className={cn(styles.button, styles.md)} variant='secondary' onClick={onRetry}>Ещё раз</Button>
        </div>
      </Panel>
    )
  }

  return (
    <Panel className={className}>
      <Text className={styles.failText}>
        <Text as='span' weight='bold'>Упс!</Text>
        <br/>
        <Text as='span'>Попробуй тапать чаще.</Text>
      </Text>
      <div className={styles.buttons}>
        <Button className={cn(styles.button, styles.sm)} variant='secondary' onClick={onRetry}>Ещё раз</Button>
      </div>
    </Panel>
  )
}
