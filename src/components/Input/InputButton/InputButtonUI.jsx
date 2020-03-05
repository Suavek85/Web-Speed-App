import React from 'react'
import PropTypes from 'prop-types'
import cls from 'classnames'

//INTERNAL
import { appStates } from '../../../constants/states'
import { btnsContent } from '../../../constants/content'
import './InputButtonUI.scss'  

function InputButtonUI(props) {
 
  const { getAppState, handleGetReportClick } = props

  //BUTTON FORMATTING - CLASSES AND CONTENT
  const isStatus = state => getAppState === state
  
  const getContentFromStatus = state => { 
    const contentIndex = Object.keys(btnsContent).findIndex(el => el === state)
    return Object.values(btnsContent)[contentIndex]
  }

  const getButtonClasses = cls({
    'inputbutton__wrapper': true,
    'inputbutton__wrapper--inactive': isStatus(appStates.INACTIVE),
    'inputbutton__wrapper--loading': isStatus(appStates.LOADING),
    'inputbutton__wrapper--error': isStatus(appStates.ERROR),
    'inputbutton__wrapper--success': isStatus(appStates.SUCCESS),
  })

  return (
    <>
      <button 
        onClick={handleGetReportClick} 
        disabled={isStatus(appStates.LOADING)}
        className={getButtonClasses}
      >   
        {getContentFromStatus(getAppState)}
      </button>
    </>
  )
}

InputButtonUI.propTypes = {
  data: PropTypes.string,
  getAppState: PropTypes.string,
  handleGetReportClick: PropTypes.func
}

export default InputButtonUI