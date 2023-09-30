import {useCallback, useEffect, useMemo} from 'react'
import {useTimer} from './useTimer'
import {useClicker} from './useClicker'

export function useGame({timeInMillis, clicks, onWin, onFail} = {}) {
  const {timeLeft, start: startTimer, stop: stopTimer} = useTimer(timeInMillis)
  const {clicksLeft, start: startClicker, stop: stopClicker} = useClicker(clicks)

  const start = useCallback(() => {
    startTimer()
    startClicker()
  }, [startTimer, startClicker])

  const stop = useCallback(() => {
    stopTimer()
    stopClicker()
  }, [stopTimer, stopClicker])

  useEffect(() => {
    if (!timeLeft && clicksLeft) {
      onFail?.()
      stop()
    } else if (!clicksLeft) {
      onWin?.()
      stop()
    }
  }, [timeLeft, clicksLeft])

  return useMemo(() => ({timeLeft, start, stop}), [timeLeft, start, stop])
}