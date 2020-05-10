import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import { appStates } from '../../../../constants/states'
import { btnsContent } from '../../../../constants/content'
import styles from './InputButtonUI.scss'  

export default function InputButtonUI(props) {
 
  const { getAppState, handleGetReportClick } = props

  //BUTTON FORMATTING - CLASSES AND CONTENT
  const isStatus = state => getAppState === state
  
  const getContentFromStatus = state => { 
    const contentIndex = Object.keys(btnsContent).findIndex(el => el === state)
    return Object.values(btnsContent)[contentIndex]
  }

  let cx = classNames.bind(styles)

  let getButtonClasses = cx({
    block: true,
    blockInactive: isStatus(appStates.INACTIVE),
    blockLoading: isStatus(appStates.LOADING),
    blockError: isStatus(appStates.ERROR),
    blockSuccess: isStatus(appStates.SUCCESS),
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
