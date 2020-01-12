import React from 'react'
import PropTypes from 'prop-types'
import { appStates } from '../../../constants/states'
import './Spinner.scss'

function Spinner(props) {
  const { getReportStatus } = props
  const loadingStatus = getReportStatus === appStates.LOADING
  return loadingStatus && <div className="spinner" ></div>
}

Spinner.propTypes = {
  getReportStatus: PropTypes.string.isRequired,
}

Spinner.defaultProps = {
  getReportStatus: appStates.INACTIVE,
}

export default Spinner