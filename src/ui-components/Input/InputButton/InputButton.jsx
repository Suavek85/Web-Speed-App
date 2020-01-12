import React from 'react'
import PropTypes from 'prop-types'
import { appStates } from '../../../constants/states'
import { GETREPORT, LOADING } from '../../../constants/content'
import './InputButton.scss'
import cls from 'classnames'

function InputButton(props) {
  const {getReportStatus, handleGetReportClick } = props
  const loadingStatus = getReportStatus === appStates.LOADING
  const inactiveStatus = getReportStatus === appStates.INACTIVE
  const getButtonClasses = cls({
    'inputbutton__wrapper': true,
    'inputbutton__wrapper--inactive': inactiveStatus,
    'inputbutton__wrapper--loading': loadingStatus,
  })
  return (
    <button 
      onClick={handleGetReportClick} 
      disabled={loadingStatus}
      className={getButtonClasses}
    >   
      {inactiveStatus && GETREPORT}
      {loadingStatus && LOADING}
    </button>
  )
}

InputButton.propTypes = {
  getReportStatus: PropTypes.string.isRequired,
  handleGetReportClick: PropTypes.func.isRequired
}

InputButton.defaultProps = {
  getReportStatus: appStates.INACTIVE,
  handleGetReportClick: () => {}
}

export default InputButton