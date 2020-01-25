import React from "react"
import { useSelector } from "react-redux"
import WebOptimizeUI from './WebOptimizeUI'

//INTERNAL
import { appStates } from '../../constants/states'

function WebOptimizeWrapper() {
  const getAppState = useSelector(state => state.getAppState)
  const loadingStatus = getAppState === appStates.LOADING
  
  return <WebOptimizeUI 
    getAppState={getAppState} 
    loadingStatus={loadingStatus} 
  />
}

export default WebOptimizeWrapper

