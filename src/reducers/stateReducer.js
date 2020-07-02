import { appStates } from '../constants/states'

const initialState = ['?', '?', '?', '?','?', '?', '?'] 
const initialStateLighthouse = [{}, {}, {}, {}, {}, {}] 

export const stateReducer = (state = { getAppState: initialState }, action) => {
  switch (action.type) {
  case "INACTIVE":
    return {
      getAppState: appStates.INACTIVE,
      getData: initialState,
      getLighthouseData: initialStateLighthouse,
      getErrorStatus: 0
    }
  case appStates.LOADING:
    return {
      getAppState: appStates.LOADING,
      getData: initialState,
      getLighthouseData: initialStateLighthouse,
      getErrorStatus: 0
    }
  case "ERROR":
    return {
      getAppState: appStates.ERROR,
      getData: initialState,
      getLighthouseData: initialStateLighthouse,
      getErrorStatus: action.payload
    }
  case "SUCCESS":
    return {
      getAppState: appStates.SUCCESS,
      getData: action.payload,
      getLighthouseData: action.payloadLighthouse,
      getErrorStatus: 0
    }
  default:
    return {
      getAppState: appStates.INACTIVE,
      getData: initialState,
      getLighthouseData: initialStateLighthouse,
      getErrorStatus: 0
    }
  }
}


     