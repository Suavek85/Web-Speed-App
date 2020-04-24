import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'

import InputButtonUI from './InputButtonUI'
import { appStates } from '../../../constants/states'
import apikey from '../../../helpers/apikey'
import getState from '../../../actions/stateActions.js'


function InputButtonWrapper() {

  //FETCHING API

  const getUrlState = useSelector(state => state.urlReducer.getUrl)
  const inputUrl = getUrlState

  const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${inputUrl}&key=${apikey()}`

  const dispatch = useDispatch()
 
  async function makeGetRequest() {
    try {
      let res = await axios.get(url)
      let allData = res.data      
      console.log(allData)
      dispatch(getState([
        allData.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category, 
        allData.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.category,
        allData.lighthouseResult.audits['speed-index'],
        allData.lighthouseResult.audits['time-to-first-byte'],
        allData.lighthouseResult.audits['total-byte-weight'],
        allData.lighthouseResult.audits['interactive'],
        allData.lighthouseResult.audits['uses-responsive-images'],
        allData.lighthouseResult.audits['uses-text-compression'],
      ]))
    } catch(err) {
      dispatch({ type: appStates.ERROR })
      setTimeout(function () {
        dispatch({ type: appStates.INACTIVE })
      }, 5000)
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