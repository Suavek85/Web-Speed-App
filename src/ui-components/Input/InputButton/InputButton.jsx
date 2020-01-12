import React from 'react'
import PropTypes from 'prop-types'
import { appStates } from '../../../constants/states'
import { appContent } from '../../../constants/content'
import './InputButton.scss'
import cls from 'classnames'

function InputButton(props) {
  const {getReportStatus, handleGetReportClick } = props
  const getClassFromState = state => getReportStatus === state
  const getContentFromState = state => { 
    const contentObj = appContent.find(el => Object.keys(el)[0] === state)
    return Object.values(contentObj)[0]
  }
  const getButtonClasses = cls({
    'inputbutton__wrapper': true,
    'inputbutton__wrapper--inactive': getClassFromState(appStates.INACTIVE),
    'inputbutton__wrapper--loading': getClassFromState(appStates.LOADING),
    'inputbutton__wrapper--error': getClassFromState(appStates.ERROR),
  })
  return (
    <button 
      onClick={handleGetReportClick} 
      disabled={getClassFromState(appStates.LOADING)}
      className={getButtonClasses}
    >   
      {getContentFromState(getReportStatus)}
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