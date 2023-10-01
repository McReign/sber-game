import {createContext, useCallback, useContext, useMemo, useState} from 'react'
import {NEXT_SCREENS, SCREENS} from "../constants/screens";

const initialState = {
  screen: SCREENS.SCREEN_1,
}

const ProgressContext = createContext(initialState)

export function ProgressProvider(props) {
  const {children} = props
  /////////////////// for development ////////////////////////////////////
  const urlParams = new URLSearchParams(window.location.search);
  const screenParam = urlParams.get('screen');
  ////////////////////////////////////////////////////////////////////////
  const [screen, setScreen] = useState(screenParam || SCREENS.SCREEN_1)

  const next = useCallback(() => {
    setScreen(prev => NEXT_SCREENS[prev])
  }, [])

  const state = useMemo(() => ({screen, next}), [screen, next])

  return (
    <ProgressContext.Provider value={state}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  return useContext(ProgressContext)
}