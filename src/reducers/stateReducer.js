import { appStates } from '../constants/states'

const initialData = ['?', '?', '?', '?','?', '?', '?'] 
const initialDataLighthouse = [{}, {}, {}, {}, {}, {}] 

export const stateReducer = (state = { getAppState: appStates.INACTIVE }, action) => {
  switch (action.type) {
  case "INACTIVE":
    return {
      getAppState: appStates.INACTIVE,
      getData: initialData,
      getLighthouseData: initialDataLighthouse,
      getErrorStatus: null
    }
  case appStates.LOADING:
    return {
      getAppState: appStates.LOADING,
      getData: initialData,
      getLighthouseData: initialDataLighthouse,
      getErrorStatus: null
    }
  case appStates.ERROR:
    return {
      getAppState: appStates.ERROR,
      getData: initialData,
      getLighthouseData: initialDataLighthouse,
      getErrorStatus: action.payload
    }
  case appStates.SUCCESS:
    return {
      getAppState: appStates.SUCCESS,
      getData: action.payload,
      getLighthouseData: action.payloadLighthouse,
      getErrorStatus: null
    }
  default:
    return {
      getAppState: appStates.INACTIVE,
      getData: initialData,
      getLighthouseData: initialDataLighthouse,
      getErrorStatus: null
    }
  }
}


     