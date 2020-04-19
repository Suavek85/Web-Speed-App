import React, { useState } from 'react'
import { useSelector } from "react-redux"
import classNames from 'classnames/bind'

import { tabsDescriptions, tabsTitles } from '../../../constants/content'
import WebOptimizeWrapper from '../../svgs/WebOptimizeWrapper'
import styles from './Lighthouse.scss'

export default function LightHouse() {

  const [ activeTab, setActiveTab ] = useState('0')
  const activeTabInt = parseInt(activeTab)

  const handleActiveTab = e => setActiveTab(e.target.id)
  
  let cx = classNames.bind(styles)

  let getActiveTabClass = arg => cx({
    blockTabsItem: true,
    blockActive: activeTab === arg,
  })

  const activeTabIndex = 2 + activeTabInt

  const activeTabDesc = tabsDescriptions[activeTabInt]

  const activeTabTitle = tabsTitles[activeTabInt]

  const getDataState = useSelector(state => state.stateReducer.getData)

  const { score, displayValue } = getDataState[activeTabIndex]

  const scorePercentage = score ? Math.round(score * 100) + '%' : '?'

  const displayValuePercentage = displayValue ? displayValue : '?'

  return (
    <div className={ styles.blockWrapper } >
      <div className={ styles.blockHeader }>
        <WebOptimizeWrapper />
        <h1>Lighthouse<br/>Score</h1>
      </div>
      <div className={ styles.blockContent }>
        <div onClickCapture={ handleActiveTab } className={ styles.blockTabs }>
          <div id='0' className={ getActiveTabClass('0') }>Speed Index</div>
          <div id='1' className={ getActiveTabClass('1') }>Time to First Byte</div>
          <div id='2' className={ getActiveTabClass('2') }>Total Byte Weight</div>
          <div id='3' className={ getActiveTabClass('3') }>Interactive</div>
          <div id='4' className={ getActiveTabClass('4') }>Used Responsive Images</div>
          <div id='5' className={ getActiveTabClass('5') }>Uses Text Compression</div>
        </div>
        <div className={ styles.blockResults }>
          <p><span>Title:</span> { activeTabTitle }</p>
          <p><span>Description:</span> { activeTabDesc }</p>
          <p><span>Score:</span> { scorePercentage } </p>
          <p><span>Display Value:</span> { displayValuePercentage } </p>
        </div>
      </div>
    </div>
  )
}