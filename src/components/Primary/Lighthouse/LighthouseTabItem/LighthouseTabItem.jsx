import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import { tabsHeader } from '../../../../constants/content'
import styles from './LighthouseTabItem.scss'

export default function LighthouseTabItem(props) {
  const { activeTab } = props

  //STYLE
  const cx = classNames.bind(styles)
  
  const geTabItemClass = (tabIndex, activeTabIndex) => cx({
    block: true,
    blockActive: activeTabIndex == tabIndex,
  })

  return (
    tabsHeader.map((el,i) => ( <div 
      id={i} 
      key={i} 
      className={ geTabItemClass(i, activeTab) }>
      {el.content}
    </div>) )
  )
}

LighthouseTabItem.propTypes = {
  activeTab: PropTypes.string,
}