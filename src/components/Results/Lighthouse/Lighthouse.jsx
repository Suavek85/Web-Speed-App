import React from 'react'

import WebOptimizeWrapper from '../../svgs/WebOptimizeWrapper'
import styles from './Lighthouse.scss'

export default function LightHouse() {

  return (
    <div className={ styles.blockWrapper } >
      <div className={ styles.blockHeader }>
        <WebOptimizeWrapper />
        <h1>Lighthouse<br/>Score</h1>
      </div>
      <div className={ styles.blockContent }>
        <div className={ styles.blockTabs }>
          <div className={ styles.blockTabsItem }>Lorem</div>
          <div className={ styles.blockTabsItem }>Lorem</div>
          <div className={ styles.blockTabsItem }>Lorem</div>
          <div className={ styles.blockTabsItem }>Lorem</div>
          <div className={ styles.blockTabsItem }>Lorem</div>
          <div className={ styles.blockTabsItem }>Lorem</div>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        
      </div>
    </div>
  )
}