import { navigationStates } from '../constants/navigationStates'

export const toggleReducer = (state = { toggleNavigation: navigationStates.NOANIMATION }, action) => {
  switch (action.type) {
  case "EXPAND":
    return {
      toggleNavigation: navigationStates.EXPAND
    }
  case "COLLAPSE":
    return {
      toggleNavigation: navigationStates.COLLAPSE
    }
  default:
    return {
      toggleNavigation: navigationStates.NOANIMATION
    }
  }
}

     