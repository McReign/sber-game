import {useCallback, useEffect, useMemo, useRef, useState} from 'react'

export function useClicker(clicks) {
  const isClickingRef = useRef(false)
  const [clicked, setClicked] = useState(false)
  const [clicksLeft, setClicksLeft] = useState(clicks)

  const handleClickStart = useCallback(() => {
    if (!isClickingRef.current) {
      return
    }

    setClicked(true)
  }, [])

  const handleClickEnd = useCallback(() => {
    if (!isClickingRef.current) {
      return
    }

    const newClicksLeft = clicksLeft - 1
    setClicksLeft(newClicksLeft)
    setClicked(false)

    if (newClicksLeft === 0) {
      isClickingRef.current = false
    }
  }, [clicksLeft])

  const start = useCallback(() => {
    isClickingRef.current = true
    setClicksLeft(clicks)
    setClicked(false)
  }, [clicks])

  const stop = useCallback(() => {
    isClickingRef.current = false
    setClicked(false)
  }, [])

  const reset = useCallback(() => {
    isClickingRef.current = false
    setClicksLeft(clicks)
    setClicked(false)
  }, [clicks])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickStart)
    document.addEventListener('touchstart', handleClickStart)
    document.addEventListener('mouseup', handleClickEnd)
    document.addEventListener('touchend', handleClickEnd)

    return () => {
      document.removeEventListener('mousedown', handleClickStart)
      document.removeEventListener('touchstart', handleClickStart)
      document.removeEventListener('mouseup', handleClickEnd)
      document.removeEventListener('touchend', handleClickEnd)
    }
  }, [handleClickStart, handleClickEnd])

  return useMemo(
    () => ({clicksLeft, clicked, start, stop, reset}),
    [clicksLeft, clicked, start, stop, reset],
  )
}