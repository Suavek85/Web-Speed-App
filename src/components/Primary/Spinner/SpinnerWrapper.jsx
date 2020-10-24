import React from 'react'
import { useSelector } from "react-redux"

import SpinnerUI from './SpinnerUI'

function SpinnerWrapper() {
  const getAppState = useSelector(state => state.stateReducer.getAppState)
  return <SpinnerUI getAppState={getAppState} />
}

export default SpinnerWrapper