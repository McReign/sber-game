import {useCallback, useMemo, useRef, useState} from 'react'

export function useTimer(timeInMillis) {
  const isTickingRef = useRef(false)
  const [timeLeft, setTimeLeft] = useState(timeInMillis)

  const handleTick = useCallback((startTime) => {
    if (!isTickingRef.current) {
      return
    }

    const newTimeLeft = Math.max(0, startTime + timeInMillis - Date.now())
    setTimeLeft(newTimeLeft)

    if (newTimeLeft === 0) {
      isTickingRef.current = false
    } else {
      requestAnimationFrame(() => handleTick(startTime))
    }
  }, [timeInMillis])

  const start = useCallback(() => {
    isTickingRef.current = true
    setTimeLeft(timeInMillis)
    handleTick(Date.now())
  }, [handleTick, timeInMillis])

  const stop = useCallback(() => {
    isTickingRef.current = false
  }, [])

  const reset = useCallback(() => {
    isTickingRef.current = false
    setTimeLeft(timeInMillis)
  }, [timeInMillis])

  return useMemo(() => ({timeLeft, start, stop, reset}), [timeLeft, start, stop, reset])
}