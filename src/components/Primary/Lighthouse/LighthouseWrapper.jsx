import React, { useState } from 'react'
import { useSelector } from "react-redux"
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'

import LighthouseTabContent from './LighthouseTabContent/LighthouseTabContent'
import LighthouseTabs from './LighthouseTabs/LighthouseTabs'
import LighthouseHeader from './LighhouseHeader/LighthouseHeader'
import { tabsDescriptions, tabsTitles } from '../../../constants/content'
import styles from './Lighthouse.scss'
import { tabletWidth, smallMobileWidth } from'../../../scss/mediaqueries'

export default function LightHouse() {
  
  const [ activeTab, setActiveTab ] = useState('0')
  const activeTabInt = parseInt(activeTab)

  const handleActiveTab = e => setActiveTab(e.target.id)

  const activeTabDesc = tabsDescriptions[activeTabInt]
  const activeTabTitle = tabsTitles[activeTabInt]

  const getDataState = useSelector(state => state.stateReducer.getLighthouseData)
  const { score, displayValue } = getDataState[activeTabInt]
  const scorePercentage = score ? Math.round(score * 100) + '%' : '?'
  const displayValuePercentage = displayValue ? displayValue : '?'

  //STYLES
  let cx = classNames.bind(styles)
  let getWrapperClass = cx({
    blockWrapper: true,
    blockWrapperTablet: useMediaQuery(tabletWidth),
    blockWrapperSmallMobile: useMediaQuery(smallMobileWidth),
  })

  //PROPS
  const tabsProps = { handleActiveTab, activeTab }

  const tabContentProps = { 
    activeTabDesc,
    activeTabTitle,
    score,
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