import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'

import InputButtonUI from './InputButtonUI'
import { appStates } from '../../../../constants/states'
import { lighthouseData } from '../../../../constants/lighthouseData'
import getUrl from '../../../../helpers/getUrl'

function InputButtonWrapper() {

  const dispatch = useDispatch()
 
  async function makeGetRequest() {

    const urlInput = document.getElementById('urlinput').value
    const url = getUrl(urlInput)

    try {
      
      let res = await axios.get(url)

      let allData = res.data 

      const loadingExperienceArr = [
        allData.lighthouseResult.audits['dom-size'].score,
        allData.lighthouseResult.audits['unused-javascript'].score,
        allData.loadingExperience.id,
        allData.loadingExperience.overall_category,
        allData.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category, 
        allData.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.category,
        allData.lighthouseResult.audits['unused-css-rules'].score,
      ]

      const lighthouseDataArr = lighthouseData.map(el => allData.lighthouseResult.audits[el] )

      dispatch({ 
        type: appStates.SUCCESS,
        payload: loadingExperienceArr,
        payloadLighthouse: lighthouseDataArr
      })
    } 
    
    catch(err) {
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
      handleGetReportClick={ handleGetReportClick } 
      getAppState={ getAppState } 
    />
  )
}

export default InputButtonWrapper