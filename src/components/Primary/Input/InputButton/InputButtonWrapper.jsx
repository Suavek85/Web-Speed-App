import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'

import InputButtonUI from './InputButtonUI'
import { appStates } from '../../../../constants/states'
import { lighthouseData } from '../../../../constants/lighthouseData'
import apikey from '../../../../helpers/apikey'

function InputButtonWrapper() {

  const dispatch = useDispatch()
  const key = apikey()
 
  async function makeGetRequest() {

    const urlInput = document.getElementById('urlinput').value
    const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${ urlInput }&key=${ key }`

    try {
      let res = await axios.get(url)
      let allData = res.data 
      const lighthouseDataArr = lighthouseData.map(el => allData.lighthouseResult.audits[el] )
      const payloadObj = [
        allData.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category, 
        allData.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.category,
        ...lighthouseDataArr
      ]
      dispatch({ 
        type: appStates.SUCCESS,
        payload: payloadObj
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