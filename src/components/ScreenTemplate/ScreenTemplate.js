import {useCallback, useLayoutEffect, useRef, useState} from 'react'
import useResizeObserver from "use-resize-observer"
import {getSizeRatio} from "../../utils/getSizeRatio";
import {TARGET_WIDTH, TARGET_HEIGHT} from "../../constants/styles";
import styles from './ScreenTemplate.module.scss'

export function ScreenTemplate(props) {
  const {children} = props
  const wrapperRef = useRef()
  const contentRef = useRef()
  const [viewportHeight, setViewportHeight] = useState();
  const [contentHeight, setContentHeight] = useState();
  const [contentWidth, setContentWidth] = useState();
  const sizeRatio = getSizeRatio(contentWidth, contentHeight, TARGET_WIDTH, TARGET_HEIGHT)

  const calculateWrapperSize = useCallback(() => {
    setViewportHeight(document?.documentElement?.clientHeight)
  }, [])

  const calculateContentSize = useCallback(() => {
    setContentHeight(contentRef?.current?.offsetHeight)
    setContentWidth(contentRef?.current?.offsetWidth)
  }, [contentRef])

  useLayoutEffect(() => {
    calculateWrapperSize()
  }, [])

  useLayoutEffect(() => {
    calculateContentSize()
  }, [viewportHeight])

  useResizeObserver({ onResize: calculateWrapperSize, ref: wrapperRef })

  return (
    <div ref={wrapperRef} className={styles.wrapper} style={{height: viewportHeight, '--size-ratio': sizeRatio}}>
      <div ref={contentRef} className={styles.content}>
        {children}
      </div>
    </div>
  )
}
