import { appStates } from '../constants/states'
import getStateforReducer from '../helpers/getStateforReducer'

const initialData = null
const initialDataLighthouse = [{}, {}, {}, {}, {}, {}] 


export const stateReducer = (state = { getAppState: appStates.INACTIVE }, action) => {
  switch (action.type) {
  case "INACTIVE":
    return {
      ...getStateforReducer(appStates.INACTIVE, initialData, initialDataLighthouse, null)
    }
  case appStates.LOADING:
    return {
      ...getStateforReducer(appStates.LOADING, initialData, initialDataLighthouse, null)
    }
  case appStates.ERROR:
    return {
      ...getStateforReducer(appStates.ERROR, initialData, initialDataLighthouse, action.payload)
    }
  case appStates.SUCCESS:
    return {
      ...getStateforReducer(appStates.SUCCESS, action.payload, action.payloadLighthouse, null)
    }
  default:
    return {
      ...getStateforReducer(appStates.INACTIVE, initialData, initialDataLighthouse, null)
    }
  }
}


     