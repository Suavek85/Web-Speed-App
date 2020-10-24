import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'
import LighthouseTabItem from '../LighthouseTabItem/LighthouseTabItem'

import styles from './LighthouseTabs.scss'
import { 
  smallTabletWidth, 
  smallMobileWidth 
} from'../../../../scss/mediaqueries'

export default function LighthouseTabs(props) {

  const { handleActiveTab, activeTab } = props

  const cx = classNames.bind(styles)
  const getTabClass = cx({
    blockTabs: true,
    blockTabsSmallTablet: useMediaQuery(smallTabletWidth),
    blockTabsSmallMobile: useMediaQuery(smallMobileWidth),
  })

  return (
    <div onClickCapture={ handleActiveTab } className={ getTabClass }>
      <LighthouseTabItem activeTab={activeTab} />
    </div>
  )
}

LighthouseTabs.propTypes = {
  handleActiveTab: PropTypes.func,
  activeTab: PropTypes.string,
}