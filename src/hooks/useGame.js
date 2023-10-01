import {useCallback, useEffect, useMemo, useState} from 'react'
import {useTimer} from './useTimer'
import {useClicker} from './useClicker'
import {STATUS} from "../constants/game";

export function useGame({timeInMillis, clicks} = {}) {
  const [failsCount, setFailsCount] = useState(0)
  const [status, setStatus] = useState(STATUS.PENDING)
  const {timeLeft, start: startTimer, stop: stopTimer, reset: resetTimer} = useTimer(timeInMillis)
  const {clicksLeft, clicked, start: startClicker, stop: stopClicker, reset: resetClicker} = useClicker(clicks)

  const start = useCallback(() => {
    setStatus(STATUS.PLAYING)
    startTimer()
    startClicker()
  }, [startTimer, startClicker])

  const restart = useCallback(() => {
    resetTimer()
    resetClicker()
    start()
  }, [resetTimer, resetClicker, start])

  const handleWin = useCallback(() => {
    stopTimer()
    stopClicker()
  }, [stopTimer, stopClicker])

  const handleFail = useCallback(() => {
    stopTimer()
    stopClicker()
  }, [stopTimer, stopClicker])

  useEffect(() => {
    if (!timeLeft && clicksLeft) {
      setStatus(STATUS.FAIL)
    } else if (!clicksLeft) {
      setStatus(STATUS.WIN)
    }
  }, [timeLeft, clicksLeft])

  useEffect(() => {
    if (status === STATUS.WIN) {
      handleWin()
    }

    if (status === STATUS.FAIL) {
      setFailsCount(prev => prev + 1)
      handleFail()
    }
  }, [status])

  return useMemo(
    () => ({status, timeLeft, clicked, start, restart, failsCount}),
    [status, timeLeft, clicked, start, restart, failsCount],
  )
}