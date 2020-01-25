import React from 'react'
import { useSelector } from "react-redux"

import SpinnerUI from './SpinnerUI'

function SpinnerWrapper() {
  const getAppState = useSelector(state => state.getAppState)
  return <SpinnerUI getAppState={getAppState} />
}

export default SpinnerWrapper