import {SwitchTransition, CSSTransition} from "react-transition-group";
import {useProgress} from "../../contexts/ProgressContext";
import {ScreenContentResolver} from "../ScreenContentResolver";
import {ANIMATION_DURATION, ANIMATION_NAME} from '../../constants/styles'
import styles from './ScreenResolver.module.scss'

export function ScreenResolver(props) {
  const {screen} = useProgress()

  return (
    <SwitchTransition mode='out-in'>
      <CSSTransition key={screen} timeout={ANIMATION_DURATION} classNames={ANIMATION_NAME}>
        <ScreenContentResolver className={styles.content} screen={screen} />
      </CSSTransition>
    </SwitchTransition>
  )
}
