import cn from 'classnames'
import {Image} from '../Image'
import {Text} from '../Text'
import ShortLogo from '../../assets/images/logos/shortLogo.png'
import styles from './Notification.module.scss'

export function Notification(props) {
  const {className, time, children} = props

  return (
    <div className={cn(styles.notification, className)}>
      <div className={styles.head}>
        <div className={styles.nameWrapper}>
          <Image className={styles.logo} src={ShortLogo} alt='Logo' />
          <Text className={styles.subtext}>СберБанк</Text>
        </div>
        <Text className={styles.subtext}>{time}</Text>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}