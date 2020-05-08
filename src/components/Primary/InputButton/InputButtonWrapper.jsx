import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'

import InputButtonUI from './InputButtonUI'
import { appStates } from '../../../constants/states'
import apikey from '../../../helpers/apikey'

function InputButtonWrapper() {

  const dispatch = useDispatch()
 
  async function makeGetRequest() {

    let test = document.getElementById('urlinput').value
    const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${test}&key=${apikey()}`

    try {
      let res = await axios.get(url)
      let allData = res.data      
      dispatch({ 
        type: appStates.SUCCESS,
        payload: [
          allData.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category, 
          allData.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.category,
          allData.lighthouseResult.audits['speed-index'],
          allData.lighthouseResult.audits['time-to-first-byte'],
          allData.lighthouseResult.audits['total-byte-weight'],
          allData.lighthouseResult.audits['interactive'],
          allData.lighthouseResult.audits['uses-responsive-images'],
          allData.lighthouseResult.audits['uses-text-compression'],
        ]
      })
    } catch(err) {
      dispatch({ type: appStates.ERROR })
      
    } 
  }

  const handleGetReportClick = () => { 
    dispatch({ type: appStates.LOADING })
    makeGetRequest() 
  }
  
  const getAppState = useSelector(state => state.stateReducer.getAppState)

  return (
    <InputButtonUI 
      handleGetReportClick={handleGetReportClick} 
      getAppState={getAppState} 
    />
  )
}

export default InputButtonWrapper