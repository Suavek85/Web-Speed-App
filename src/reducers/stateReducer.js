import { appStates } from '../constants/states'

export const stateReducer = (state = { getAppState: 'INACTIVE' }, action) => {
  switch (action.type) {
  case "INACTIVE":
    return {
      getAppState: appStates.INACTIVE
    }
  case appStates.LOADING:
    return {
      getAppState: appStates.LOADING
    }
  case "ERROR":
    return {
      getAppState: appStates.ERROR
    }
  default:
    return {
      getAppState: appStates.INACTIVE
    }
  }
}


     