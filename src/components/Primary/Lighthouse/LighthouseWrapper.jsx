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
  const { score } = getDataState[activeTabInt]

  //STYLES
  const cx = classNames.bind(styles)
  const getWrapperClass = cx({
    block: true,
    blockTablet: useMediaQuery(tabletWidth),
    blockSmallMobile: useMediaQuery(smallMobileWidth),
  })

  //PROPS
  const tabsProps = { handleActiveTab, activeTab }

  const tabContentProps = { 
    activeTabDesc,
    activeTabTitle,
    score,
  }

  return (
    <section className={ getWrapperClass } >
      <LighthouseHeader />
      <div className={ styles.blockContent }>
        <LighthouseTabs {...tabsProps} />
        <LighthouseTabContent  {...tabContentProps} />
      </div>
    </section>
  )
}