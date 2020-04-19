import { appStates } from '../constants/states'

const initialState = ['?', '?', {}, {}, {}, {}, {}, {}] 

export const stateReducer = (state = { getAppState: initialState }, action) => {
  switch (action.type) {
  case "INACTIVE":
    return {
      getAppState: appStates.INACTIVE,
      getData: initialState
    }
  case appStates.LOADING:
    return {
      getAppState: appStates.LOADING,
      getData: initialState
    }
  case "ERROR":
    return {
      getAppState: appStates.ERROR,
      getData: initialState
    }
  case "SUCCESS":
    return {
      getAppState: appStates.SUCCESS,
      getData: action.payload
    }
  default:
    return {
      getAppState: appStates.INACTIVE,
      getData: initialState
    }
  }
}


     