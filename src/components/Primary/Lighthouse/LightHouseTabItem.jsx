import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Lighthouse.scss'

export default function LighthouseTabItem(props) {
  const { activeTab } = props

  const tabsData = [
    { content: 'Speed Index' },
    { content: 'Time to First Byte' },
    { content: 'Total Byte Weight' },
    { content: 'Interactive' },
    { content: 'Used Responsive Images' },
    { content: 'Uses Text Compression' },
  ]

  //STYLE
  let cx = classNames.bind(styles)
  
  let geTabItemClass = (arg, activeTab) => cx({
    blockTabsItem: true,
    blockTabsItemActive: activeTab === arg,
  })

  return (
    tabsData.map((el,i) => ( <div 
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