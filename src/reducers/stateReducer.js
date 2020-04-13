import { appStates } from '../constants/states'

export const stateReducer = (state = { getAppState: ['?', '?', {}] }, action) => {
  switch (action.type) {
  case "INACTIVE":
    return {
      getAppState: appStates.INACTIVE,
      getData: ['?', '?', {}]
    }
  case appStates.LOADING:
    return {
      getAppState: appStates.LOADING,
      getData: ['?', '?', {}]
    }
  case "ERROR":
    return {
      getAppState: appStates.ERROR,
      getData: ['?', '?', {}]
    }
  case "SUCCESS":
    return {
      getAppState: appStates.SUCCESS,
      getData: action.payload
    }
  default:
    return {
      getAppState: appStates.INACTIVE,
      getData: ['?', '?', {}]
    }
  }
}


     