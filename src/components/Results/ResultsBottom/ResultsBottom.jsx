import React from 'react'
import { useSelector } from "react-redux"

import LightBulbUI from '../../svgs/LightBulb/LightBulbUI'
import { FIRST_INPUT_DELAY_HEADER, FIRST_INPUT_DELAY_CONTENT, RESULT } from '../../../constants/content.js'
import styles from './ResultsBottom.scss'

export default function ResultsBottom() {

  const getDataState = useSelector(state => state.stateReducer.getData)

  return (
    <div className={ styles.blockWrapper } >
      <div style={{padding: "0px 30px"}}>
        <h1 style={{color: 'lightgrey'}}>{ FIRST_INPUT_DELAY_HEADER }
          <LightBulbUI />
        </h1>
        <p style={{color: 'lightgrey'}}>{ FIRST_INPUT_DELAY_CONTENT }</p>
        <p style={{color: 'ivory'}}>{ RESULT }
          <span style={{color: 'ivory'}}>{ getDataState[1] }</span>
        </p>
      </div>
    </div>
  )
}
