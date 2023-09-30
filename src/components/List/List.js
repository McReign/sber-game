import cn from 'classnames'
import {Text} from '../Text'
import styles from './List.module.scss'

export function List(props) {
  const {className, items} = props

  return (
    <ul className={cn(styles.list, className)}>
      {items?.map((item, index) => (
        <Text key={index} className={styles.item} as='li' size='sm'>
          {item}
        </Text>
      ))}
    </ul>
  )
}