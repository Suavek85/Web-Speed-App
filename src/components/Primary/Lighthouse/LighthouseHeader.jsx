import React from 'react'

import WebOptimizeWrapper from '../../svgs/WebOptimizeWrapper'
import styles from './Lighthouse.scss'



export default function LighthouseHeader() {
  return (
    <div className={ styles.blockHeader }>
      <WebOptimizeWrapper />
      <h1>Lighthouse<br/>Score</h1>
    </div>
  )
}
