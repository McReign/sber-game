import cn from 'classnames'
import styles from './Button.module.scss'

export function Button(props) {
  const {className, children, variant = 'primary', size = 'md', onClick} = props

  return (
    <button className={cn(styles.button, styles[variant], styles[size], className)} onClick={onClick}>
      {children}
    </button>
  )
}