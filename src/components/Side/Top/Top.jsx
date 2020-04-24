import React from 'react'
import { useSelector } from "react-redux"

import LightBulbUI from '../../svgs/LightBulb/LightBulbUI'
import { FIRST_PAINT_HEADER, FIRST_PAINT_CONTENT, RESULT } from '../../../constants/content.js'
import styles from './Top.scss'

export default function Top() {

  const getDataState = useSelector(state => state.stateReducer.getData)

  return (
    <div className={ styles.blockWrapper } >
      <div className={ styles.contentWrapper }>
        <h1>
          { FIRST_PAINT_HEADER }
          <LightBulbUI />
        </h1>
        <p>
          { FIRST_PAINT_CONTENT }
        </p>
        <p>
          { RESULT }
          <span>
            { getDataState[0] }
          </span>
        </p>
      </div>
    </div>
  )
}
