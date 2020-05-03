import React, { useState } from 'react'
import { useSelector } from "react-redux"
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'

import LighthouseTabContent from './LighthouseTabContent'
import LighthouseTabs from './LighthouseTabs'
import { tabletWidth, mobileWidth } from'../../../scss/mediaqueries'
import { tabsDescriptions, tabsTitles } from '../../../constants/content'
import WebOptimizeWrapper from '../../svgs/WebOptimizeWrapper'
import styles from './Lighthouse.scss'

export default function LightHouse() {

  const [ activeTab, setActiveTab ] = useState('0')
  const activeTabInt = parseInt(activeTab)

  const handleActiveTab = e => setActiveTab(e.target.id)
  const activeTabIndex = 2 + activeTabInt
  const activeTabDesc = tabsDescriptions[activeTabInt]
  const activeTabTitle = tabsTitles[activeTabInt]
  const getDataState = useSelector(state => state.stateReducer.getData)
  const { score, displayValue } = getDataState[activeTabIndex]
  const scorePercentage = score ? Math.round(score * 100) + '%' : '?'
  const displayValuePercentage = displayValue ? displayValue : '?'

  //STYLES
  let cx = classNames.bind(styles)
  let getWrapperClass = cx({
    blockWrapper: true,
    blockWrapperTablet: useMediaQuery(tabletWidth),
  })
  let getTabClass = cx({
    blockTabs: true,
    blockTabsMobile: useMediaQuery(mobileWidth),
  })
  let getActiveTabClass = arg => cx({
    blockTabsItem: true,
    blockActive: activeTab === arg,
  })

  //PROPS
  const tabsProps = { handleActiveTab, getTabClass, getActiveTabClass }

  const tabContentProps = { 
    activeTabDesc,
    activeTabTitle,
    scorePercentage,
    displayValuePercentage
  }

  return (
    <div className={ getWrapperClass } >
      <div className={ styles.blockHeader }>
        <WebOptimizeWrapper />
        <h1>Lighthouse<br/>Score</h1>
      </div>
      <div className={ styles.blockContent }>
        <LighthouseTabs {...tabsProps} />
        <LighthouseTabContent  {...tabContentProps} />
      </div>
    </div>
  )
}