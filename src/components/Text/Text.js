import {createElement} from 'react'
import cn from 'classnames'
import styles from './Text.module.scss'

export function Text(props) {
  const {className, children, weight = 'regular', wrap = 'wrap', size = 'md', as = 'p'} = props

  return createElement(
    as,
    {className: cn(styles.text, styles[size], styles[wrap], styles[weight], className)},
    children,
  )
}