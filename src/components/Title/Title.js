import cn from "classnames";
import styles from './Title.module.scss';

export function Title(props) {
  const {className, width, height, children} = props

  return (
    <svg
      className={cn(styles.title, className)}
      style={{'--width': `${width}px`, '--height': `${height}px`}}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}