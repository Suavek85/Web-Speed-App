import React from "react"
import { useSelector } from "react-redux"
import WebOptimizeUI from './WebOptimizeUI'
import calcPerformanceAverage from '../../helpers/calcPerformanceAverage'

//INTERNAL
import { appStates } from '../../constants/states'

function WebOptimizeWrapper() {
  const getAppState = useSelector(state => state.stateReducer.getAppState)
  const loadingStatus = getAppState === appStates.LOADING

  const getLighthouseData = useSelector(state => state.stateReducer.getLighthouseData)
  const getScore = getLighthouseData.map(el => el.score)
  const averageScore = calcPerformanceAverage(getScore)
  
  return <WebOptimizeUI 
    getAppState={getAppState} 
    loadingStatus={loadingStatus}
    averageScore={averageScore} 
  />
}

export default WebOptimizeWrapper

