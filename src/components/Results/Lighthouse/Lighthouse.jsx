import React, { useState } from 'react'
import { useSelector } from "react-redux"
import classNames from 'classnames/bind'

import { SPEED_INDEX_DESC } from '../../../constants/content'
import WebOptimizeWrapper from '../../svgs/WebOptimizeWrapper'
import styles from './Lighthouse.scss'

export default function LightHouse() {

  const [activeTab, setActiveTab] = useState('0')

  const handleActiveTab = e => setActiveTab(e.target.id)
  
  let cx = classNames.bind(styles)

  let getActiveTabClass = arg => cx({
    blockTabsItem: true,
    blockActive: activeTab === arg,
  })

  const getDataState = useSelector(state => state.stateReducer.getData)
  const scorePercentage = getDataState[2].score ? getDataState[2].score * 100 + '%' : '?'
  const displayValue = getDataState[2].displayValue ? getDataState[2].displayValue : '?'

  return (
    <div className={ styles.blockWrapper } >
      <div className={ styles.blockHeader }>
        <WebOptimizeWrapper />
        <h1>Lighthouse<br/>Score</h1>
      </div>
      <div className={ styles.blockContent }>
        <div onClickCapture={ handleActiveTab } className={ styles.blockTabs }>
          <div id='0' className={ getActiveTabClass('0') }>Speed Index</div>
          <div id='1' className={ getActiveTabClass('1') }>Lorem</div>
          <div id='2' className={ getActiveTabClass('2') }>Lorem</div>
          <div id='3' className={ getActiveTabClass('3') }>Lorem</div>
          <div id='4' className={ getActiveTabClass('4') }>Lorem</div>
          <div id='5' className={ getActiveTabClass('5') }>Lorem</div>
        </div>
        <div className={ styles.blockResults }>
          <p>{ SPEED_INDEX_DESC }</p>
          <p>Score: { scorePercentage } </p>
          <p>Display Value: { displayValue } </p>
        </div>
      </div>
    </div>
  )
}