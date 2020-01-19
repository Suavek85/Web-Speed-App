import React from 'react'
import { appStates } from '../../../constants/states'
import './Spinner.scss'

import { useSelector } from "react-redux"

function Spinner() {
  const getAppState = useSelector(state => state.getAppState)
  const loadingStatus = getAppState === appStates.LOADING
  return loadingStatus && <div className="spinner" ></div>
}

export default Spinner