import React from 'react'
import WebOptimizeWrapper from '../../../svgs/WebOptimizeWrapper'
import styles from './LighthouseHeader.scss'
import { LIGHTHOUSE_TITLE, PERFORMANCE } from '../../../../constants/content'

export default function LighthouseHeader() {

  return (
    <div className={ styles.blockHeader }>
      <WebOptimizeWrapper />
      <div className={ styles.blockTitleWrapper }>
        <h1 className={ styles.blockTitle }>{ LIGHTHOUSE_TITLE }</h1>
        <h2 className={ styles.blockSubTitle }>{ PERFORMANCE }</h2>
      </div>
    </div>
  )
}

