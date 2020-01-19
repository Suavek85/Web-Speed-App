import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'
import cls from 'classnames'

//INTERNAL
import { appStates } from '../../../constants/states'
import { btnsContent } from '../../../constants/content'
import './InputButton.scss'

function InputButton() {
  //FETCHING API
  const [data, setData] = useState('placeholder')
  const inputUrl =  `https://www.weszlo.com`
  const key = `AIzaSyD8Ez5Z6p41SfoKnK_nUHAV5PZPtqKkDag`
  const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${inputUrl}&key=${key}`
  async function makeGetRequest() {
    let res = await axios.get(url)
    let allData = res.data
    setData(allData.captchaResult)
  }

  //ONCLICK
  const dispatch = useDispatch()
  const handleGetReportClick = () => { 
    dispatch({ type: appStates.LOADING })
    makeGetRequest() 
  }

  //BUTTON FORMATTING - CLASSES AND CONTENT
  const getAppState = useSelector(state => state.getAppState)
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
      <span>{data}</span>
    </>
  )
}

export default InputButton