import {createElement} from "react";
import cn from 'classnames'
import styles from './Title.module.scss'

const VARIANT_TO_ELEMENT = {
  primary: 'h1',
  secondary: 'h1',
}

export function Title(props) {
  const {className, variant = 'primary', children} = props

  return createElement(
    VARIANT_TO_ELEMENT[variant],
    {className: cn(styles.title, styles[variant], className)},
    children,
  )
}