import React from 'react'

import LightBulbUI from '../../svgs/LightBulb/LightBulbUI'
import styles from './ResultsBottom.scss'

export default function ResultsBottom() {
  return (
    <div className={ styles.blockWrapper } >
      <div className={ styles.blockRow }>
        <LightBulbUI />
      </div>
    </div>
  )
}
