import cn from 'classnames'
import styles from './Title.module.scss'

export function Title(props) {
  const {className, children} = props

  return <h1 className={cn(styles.title, className)}>{children}</h1>
}