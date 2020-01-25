import React from 'react'
import PropTypes from 'prop-types'

//INTERNAL
import { appStates } from '../../../constants/states'
import './SpinnerUI.scss'

function SpinnerUI(props) {
  const loadingStatus = props.getAppState === appStates.LOADING
  return loadingStatus && <div className="spinner" />
}

SpinnerUI.propTypes = {
  loadingStatus: PropTypes.boolean
}

export default SpinnerUI