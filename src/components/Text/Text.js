import {createElement} from 'react'
import cn from 'classnames'
import styles from './Text.module.scss'

export function Text(props) {
  const {className, children, weight = 'regular', size = 'md', as = 'p'} = props

  return createElement(
    as,
    {className: cn(styles.text, styles[size], styles[weight], className)},
    children,
  )
}