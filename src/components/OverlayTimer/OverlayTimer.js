import cn from 'classnames'
import styles from './OverlayTimer.module.scss'

export function OverlayTimer(props) {
  const {className, time} = props
  const seconds = `${Math.trunc(time / 1000)}`

  return (
    <div className={cn(styles.overlayTimer, className)}>
      <span className={styles.timeItem}>{seconds}</span>
    </div>
  )
}