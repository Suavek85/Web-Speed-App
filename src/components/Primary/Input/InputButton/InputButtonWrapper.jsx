import React from 'react'
import { useSelector, useDispatch } from "react-redux"

import InputButtonUI from './InputButtonUI'
import { appStates } from '../../../../constants/states'
import makeGetRequest from '../../../../helpers/makeGetRequest'

function InputButtonWrapper() {

  const dispatch = useDispatch()

  const handleGetReportClick = () => { 
    dispatch({ type: appStates.LOADING })
    makeGetRequest(dispatch) 
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