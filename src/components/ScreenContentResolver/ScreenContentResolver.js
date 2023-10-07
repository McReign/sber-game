import {useEffect, useMemo} from 'react'
import {ScreenContent1} from "../screens/ScreenContent1";
import {ScreenContent2} from "../screens/ScreenContent2";
import {ScreenContent3} from "../screens/ScreenContent3";
import {ScreenContent4} from "../screens/ScreenContent4";
import {ScreenContent5} from "../screens/ScreenContent5";
import {ScreenContent6} from "../screens/ScreenContent6";
import {ScreenContent7} from "../screens/ScreenContent7";
import {ScreenContent8} from "../screens/ScreenContent8";
import {ScreenContent9} from "../screens/ScreenContent9";
import {ScreenContent10} from "../screens/ScreenContent10";
import {ScreenContent11} from "../screens/ScreenContent11";
import {ScreenContent12} from "../screens/ScreenContent12";
import {ScreenContent13} from "../screens/ScreenContent13";
import {ScreenContent14} from "../screens/ScreenContent14";
import {preloadImage} from "../../utils/preloadImage";
import {NEXT_SCREENS} from "../../constants/screens";

export const SCREEN_COMPONENTS = {
  SCREEN_1: ScreenContent1,
  SCREEN_2: ScreenContent2,
  SCREEN_3: ScreenContent3,
  SCREEN_4: ScreenContent4,
  SCREEN_5: ScreenContent5,
  SCREEN_6: ScreenContent6,
  SCREEN_7: ScreenContent7,
  SCREEN_8: ScreenContent8,
  SCREEN_9: ScreenContent9,
  SCREEN_10: ScreenContent10,
  SCREEN_11: ScreenContent11,
  SCREEN_12: ScreenContent12,
  SCREEN_13: ScreenContent13,
  SCREEN_14: ScreenContent14,
}

export function ScreenContentResolver(props) {
  const {className, screen} = props

  const ScreenContent = useMemo(() => SCREEN_COMPONENTS[screen], [screen])

  useEffect(() => {
    const nextScreen = NEXT_SCREENS[screen]
    const NextScreenContent = SCREEN_COMPONENTS[nextScreen]
    const imagesToPreload = NextScreenContent?.preloadImages || []

    const clears = imagesToPreload.map(preloadImage)

    return () => {
      clears.forEach(clear => clear())
    }
  }, [screen])

  return ScreenContent && <ScreenContent className={className} />
}
