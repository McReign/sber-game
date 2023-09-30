import cn from 'classnames'
import styles from './BackdropPanel.module.scss'

export function BackdropPanel(props) {
  const {className, children} = props

  return <div className={cn(styles.backdropPanel, className)}>{children}</div>
}