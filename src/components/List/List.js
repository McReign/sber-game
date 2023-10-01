import cn from 'classnames'
import {Text} from '../Text'
import styles from './List.module.scss'

export function List(props) {
  const {className, items} = props

  return (
    <ul className={cn(styles.list, className)}>
      {items?.map((item, index) => (
        <Text key={index} as='li' size='sm'>
          <span className={styles.content}>{item}</span>
          {index < items?.length - 1 && <br/>}
        </Text>
      ))}
    </ul>
  )
}