import Logo from '../../assets/images/logo.svg'
import styles from './Screen.module.scss'
import {Image} from "../Image";

export function Screen(props) {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.logo} src={Logo} alt="Logo" />
    </div>
  )
}
