import React from 'react'
import { useSelector } from "react-redux"

import LightBulbUI from '../../svgs/LightBulb/LightBulbUI'
import { FIRST_INPUT_DELAY_HEADER, FIRST_INPUT_DELAY_CONTENT, RESULT } from '../../../constants/content.js'
import styles from './Bottom.scss'

export default function Bottom() {

  const getDataState = useSelector(state => state.stateReducer.getData)

  return (
    <div className={ styles.blockWrapper } >
      <div className={ styles.contentWrapper }>
        <h1>{ FIRST_INPUT_DELAY_HEADER }
          <LightBulbUI />
        </h1>
        <p>{ FIRST_INPUT_DELAY_CONTENT }</p>
        <p>{ RESULT }
          <span>{ getDataState[1] }</span>
        </p>
      </div>
    </div>
  )
}
