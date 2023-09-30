import cn from 'classnames'
import styles from './Panel.module.scss'

export function Panel(props) {
  const {className, children} = props

  return <div className={cn(styles.panel, className)}>{children}</div>
}