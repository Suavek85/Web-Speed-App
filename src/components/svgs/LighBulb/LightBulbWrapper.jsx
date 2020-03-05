import React from "react"
import { useSelector } from "react-redux"
import LightBulbUI from './LightBulbUI'

import { appStates } from '../../../constants/states.js'

function LightBulbWrapper() {
  const getAppState = useSelector(state => state.stateReducer.getAppState)
  const loadingStatus = getAppState === appStates.LOADING
  
  return <LightBulbUI 
    getAppState={getAppState} 
    loadingStatus={loadingStatus} 
  />
}

export default LightBulbWrapper
