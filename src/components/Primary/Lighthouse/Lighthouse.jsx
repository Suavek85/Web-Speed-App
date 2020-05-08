import React, { useState } from 'react'
import { useSelector } from "react-redux"
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'

import LighthouseTabContent from './LighthouseTabContent'
import LighthouseTabs from './LighthouseTabs'
import LighthouseHeader from './LighthouseHeader'
import { tabsDescriptions, tabsTitles } from '../../../constants/content'
import styles from './Lighthouse.scss'
import { tabletWidth } from'../../../scss/mediaqueries'

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

  //PROPS
  const tabsProps = { handleActiveTab, activeTab }

  const tabContentProps = { 
    activeTabDesc,
    activeTabTitle,
    scorePercentage,
    displayValuePercentage
  }

  return (
    <div className={ getWrapperClass } >
      <LighthouseHeader />
      <div className={ styles.blockContent }>
        <LighthouseTabs {...tabsProps} />
        <LighthouseTabContent  {...tabContentProps} />
      </div>
    </div>
  )
}