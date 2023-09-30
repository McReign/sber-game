import {useCallback, useEffect, useMemo, useRef, useState} from 'react'

export function useClicker(clicks) {
  const isClickingRef = useRef(false)
  const [clicksLeft, setClicksLeft] = useState(clicks)

  const handleClick = useCallback(() => {
    if (!isClickingRef.current) {
      return
    }

    const newClicksLeft = clicksLeft - 1
    setClicksLeft(newClicksLeft)

    if (newClicksLeft === 0) {
      isClickingRef.current = false
    }
  }, [clicksLeft])

  const start = useCallback(() => {
    isClickingRef.current = true
    setClicksLeft(clicks)
  }, [clicks])

  const stop = useCallback(() => {
    isClickingRef.current = false
  }, [])

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [handleClick])

  return useMemo(() => ({clicksLeft, start, stop}), [clicksLeft, start, stop])
}