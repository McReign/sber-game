import {useCallback, useEffect, useMemo, useState} from 'react'
import {useTimer} from './useTimer'
import {useClicker} from './useClicker'
import {STATUS} from "../constants/game";

export function useGame({containerRef, time, timeForGettingReady, clicks} = {}) {
  const [failsCount, setFailsCount] = useState(0)
  const [status, setStatus] = useState(STATUS.PENDING)
  const {timeLeft: gettingReadyTimeLeft, start: startGettingReadyTimer, reset: resetGettingReadyTimer} = useTimer(timeForGettingReady)
  const {timeLeft, start: startTimer, stop: stopTimer, reset: resetTimer} = useTimer(time)
  const {clicksLeft, clicked, start: startClicker, stop: stopClicker, reset: resetClicker} = useClicker(containerRef, clicks)

  const startGame = useCallback(() => {
    setStatus(STATUS.PLAYING)
    startTimer()
    startClicker()
  }, [startTimer, startClicker])

  const start = useCallback(() => {
    setStatus(STATUS.GETTING_READY)
    startGettingReadyTimer()
  }, [startGettingReadyTimer])

  const restart = useCallback(() => {
    resetGettingReadyTimer()
    resetTimer()
    resetClicker()
    start()
  }, [resetGettingReadyTimer, resetTimer, resetClicker, start])

  const handleWin = useCallback(() => {
    stopTimer()
    stopClicker()
  }, [stopTimer, stopClicker])

  const handleFail = useCallback(() => {
    stopTimer()
    stopClicker()
  }, [stopTimer, stopClicker])

  useEffect(() => {
    if (!gettingReadyTimeLeft) {
      startGame()
    }
  }, [gettingReadyTimeLeft])

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
    () => ({status, gettingReadyTimeLeft, timeLeft, clicked, start, restart, failsCount}),
    [status, gettingReadyTimeLeft, timeLeft, clicked, start, restart, failsCount],
  )
}