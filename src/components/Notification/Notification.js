import cn from 'classnames'
import {Image} from '../Image'
import {BackdropPanel} from '../BackdropPanel'
import {Text} from '../Text'
import ShortLogo from '../../assets/images/logos/shortLogo.svg'
import styles from './Notification.module.scss'

export function Notification(props) {
  const {className, time, children} = props

  return (
    <BackdropPanel className={cn(styles.notification, className)}>
      <div className={styles.head}>
        <Text className={styles.subtext}>СберБанк</Text>
        <Text className={styles.subtext}>{time}</Text>
      </div>
      <div className={styles.content}>
        <Image className={styles.logo} src={ShortLogo} alt='Logo' />
        <div className={styles.childrenWrapper}>
          <div>{children}</div>
        </div>
      </div>
    </BackdropPanel>
  )
}