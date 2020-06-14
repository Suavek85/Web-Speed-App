import React from 'react'

import WebOptimizeWrapper from '../../../svgs/WebOptimizeWrapper'
import styles from './LighthouseHeader.scss'
import { LIGHTHOUSE_TITLE } from '../../../../constants/content'

export default function LighthouseHeader() {

  const PERFORMANCE = 'Performance'

  return (
    <div className={ styles.blockHeader }>
      <WebOptimizeWrapper />
      <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
        <h1 style={{color: 'white', marginBottom: '0'}}>{ LIGHTHOUSE_TITLE }</h1>
        <p style={{color: '#24305e', fontSize: '18px', marginTop: '10px', fontWeight: '500'}} >{ PERFORMANCE }</p>
      </div>
    </div>
  )
}

