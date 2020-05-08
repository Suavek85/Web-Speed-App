import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'
import LightHouseTabItem from './LightHouseTabItem'

import styles from './Lighthouse.scss'
import { 
  mobileWidth, 
  smallMobileWidth 
} from'../../../scss/mediaqueries'

export default function LighthouseTabs(props) {
  const { handleActiveTab, activeTab } = props

  let cx = classNames.bind(styles)
  let getTabClass = cx({
    blockTabs: true,
    blockTabsMobile: useMediaQuery(mobileWidth),
    blockTabsSmallMobile: useMediaQuery(smallMobileWidth),
  })

  return (
    <div onClickCapture={ handleActiveTab } className={ getTabClass }>
      <LightHouseTabItem activeTab={activeTab} />
    </div>
  )
}

LighthouseTabs.propTypes = {
  handleActiveTab: PropTypes.func,
  activeTab: PropTypes.string,
}