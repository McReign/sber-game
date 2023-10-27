import cn from 'classnames'
import styles from './Timer.module.scss'

function TimeItem(props) {
  const {children} = props

  return (
    <div className={styles.timeItem}>
      {children}
    </div>
  )
}

export function Timer(props) {
  const {className, time} = props
  const seconds = `${Math.trunc(time / 1000)}`.padStart(2, '0')
  const milliseconds = `${Math.trunc(time % 1000 / 10)}`.padStart(2, '0')

  return (
    <div className={cn(styles.timer, className)}>
      <TimeItem>{seconds[0]}</TimeItem>
      <TimeItem>{seconds[1]}</TimeItem>
      <span className={styles.separator}>:</span>
      <TimeItem>{milliseconds[0]}</TimeItem>
      <TimeItem>{milliseconds[1]}</TimeItem>
    </div>
  )
}