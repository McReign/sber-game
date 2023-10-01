import Logo from '../../assets/images/logos/logo.svg'
import styles from './Screen.module.scss'
import {Image} from "../Image";
import {useProgress} from "../../contexts/ProgressContext";
import {ScreenContentResolver} from "../ScreenContentResolver";

export function Screen(props) {
  const {screen} = useProgress()

  return (
    <div className={styles.wrapper}>
      <Image className={styles.logo} src={Logo} alt="Logo" />
      <ScreenContentResolver className={styles.content} screen={screen} />
    </div>
  )
}
