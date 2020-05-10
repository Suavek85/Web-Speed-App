import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import { tabsHeader } from '../../../constants/content'
import styles from './Lighthouse.scss'

export default function LighthouseTabItem(props) {
  const { activeTab } = props

  //STYLE
  let cx = classNames.bind(styles)
  
  let geTabItemClass = (tabIndex, activeTabIndex) => cx({
    blockTabsItem: true,
    blockTabsItemActive: activeTabIndex === tabIndex,
  })

  return (
    tabsHeader.map((el,i) => ( <div 
      id={i} 
      key={i} 
      className={ geTabItemClass(i.toString(), activeTab) }>
      {el.content}
    </div>) )
  )
}

LighthouseTabItem.propTypes = {
  activeTab: PropTypes.string,
}