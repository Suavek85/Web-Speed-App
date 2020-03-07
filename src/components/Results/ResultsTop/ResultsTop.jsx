import React from 'react'
import { useSelector } from "react-redux"

import LightBulbUI from '../../svgs/LightBulb/LightBulbUI'
import { FIRST_PAINT_HEADER, FIRST_PAINT_CONTENT, FIRST_PAINT_RESULT } from '../../../constants/content.js'
import styles from './ResultsTop.scss'

export default function ResultsTop() {

  const getDataState = useSelector(state => state.dataReducer.getData)

  return (
    <div className={ styles.blockWrapper } >
      <div style={{padding: "0px 30px"}}>
        <h1 style={{color: 'lightgrey'}}>{ FIRST_PAINT_HEADER }
          <LightBulbUI />
        </h1>
        <p style={{color: 'lightgrey'}}>{ FIRST_PAINT_CONTENT }</p>
        <p style={{color: 'ivory'}}>{ FIRST_PAINT_RESULT }
          <span style={{color: 'ivory'}}>{ getDataState }</span>
        </p>
      </div>
    </div>
  )
}
