import {useRef} from 'react'
import {useSizeRatio} from '../../hooks/useSizeRatio'
import styles from './ScreenTemplate.module.scss'

export function ScreenTemplate(props) {
  const {children} = props
  const wrapperRef = useRef()
  const sizeRatio = useSizeRatio(wrapperRef)

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div className={styles.content} style={{ '--size-ratio': sizeRatio }}>
        {children}
      </div>
    </div>
  )
}
