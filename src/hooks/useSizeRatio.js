import {useState, useLayoutEffect} from 'react'
import useResizeObserver from 'use-resize-observer'
import constants from '../styles/constants.scss'

export function useSizeRatio(elementRef) {
  const [sizeRatio, setSizeRatio] = useState(1)
  function handleCalculateSizeRatio() {
    if (!elementRef.current) {
      return
    }

    const width = elementRef.current.offsetWidth
    const height = elementRef.current.offsetHeight

    const targetWidth = parseInt(constants.targetWidth)
    const targetHeight = parseInt(constants.targetHeight)

    const widthRatio = width / targetWidth
    const heightRatio = height / targetHeight

    const ratio = Math.min(widthRatio, heightRatio)

    setSizeRatio(ratio);
  }

  useLayoutEffect(() => {
    handleCalculateSizeRatio()
  }, [])

  useResizeObserver({ onResize: handleCalculateSizeRatio, ref: elementRef })

  return sizeRatio
}