import {useCallback, useRef, useState} from 'react'
import useResizeObserver from "use-resize-observer"
import {getSizeRatio} from "../../utils/getSizeRatio";
import {TARGET_WIDTH, TARGET_HEIGHT} from "../../constants/styles";
import styles from './ScreenTemplate.module.scss'

export function ScreenTemplate(props) {
  const {children} = props
  const wrapperRef = useRef()
  const contentRef = useRef()
  const [viewportHeight, setViewportHeight] = useState('100%');
  const [contentHeight, setContentHeight] = useState(0);
  const contentWidth = contentHeight * TARGET_WIDTH / TARGET_HEIGHT
  const sizeRatio = getSizeRatio(contentWidth, contentHeight, TARGET_WIDTH, TARGET_HEIGHT)

  const handleResize = useCallback(() => {
    setViewportHeight(document?.documentElement?.clientHeight || '100%')
    setContentHeight(contentRef?.current?.offsetHeight || 0)
  }, [contentRef])

  useResizeObserver({ onResize: handleResize, ref: wrapperRef })

  return (
    <div ref={wrapperRef} className={styles.wrapper} style={{height: viewportHeight, '--size-ratio': sizeRatio}}>
      <div ref={contentRef} className={styles.content} style={{width: contentWidth}}>
        {children}
      </div>
    </div>
  )
}
