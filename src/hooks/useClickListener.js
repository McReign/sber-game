import {useCallback} from "react";
import {isTouchDevice} from "../utils/isTouchDevice";

export function useClickListener(onClickStart, onClickEnd) {
  const handleMouseDown = useCallback(() => {
    if (isTouchDevice()) {
      return
    }

    onClickStart?.()
  }, [onClickStart])

  const handleMouseUp = useCallback(() => {
    if (isTouchDevice()) {
      return
    }

    onClickEnd?.()
  }, [onClickEnd])

  const handleTouchStart = useCallback(() => {
    if (!isTouchDevice()) {
      return
    }

    onClickStart?.()
  }, [onClickStart])

  const handleTouchEnd = useCallback(() => {
    if (!isTouchDevice()) {
      return
    }

    onClickEnd?.()
  }, [onClickEnd])

  return useCallback((element) => {
    element.addEventListener('mousedown', handleMouseDown)
    element.addEventListener('mouseup', handleMouseUp)
    element.addEventListener('touchstart', handleTouchStart)
    element.addEventListener('touchend', handleTouchEnd)

    return () => {
      element.removeEventListener('mousedown', handleMouseDown)
      element.removeEventListener('mouseup', handleMouseUp)
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchend', handleTouchEnd)
    }
  }, [handleMouseDown, handleMouseUp, handleTouchStart, handleTouchEnd])
}