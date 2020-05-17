import React from 'react'

import WebOptimizeWrapper from '../../../svgs/WebOptimizeWrapper'
import styles from './LighthouseHeader.scss'
import { LIGHTHOUSE_TITLE } from '../../../../constants/content'

export default function LighthouseHeader() {
  return (
    <div className={ styles.blockHeader }>
      <WebOptimizeWrapper />
      <h1>{ LIGHTHOUSE_TITLE }</h1>
    </div>
  )
}
