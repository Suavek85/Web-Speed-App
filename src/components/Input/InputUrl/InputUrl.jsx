import React from 'react'
import { useDispatch } from "react-redux"

import urlActions from '../../../actions/urlActions.js'
import { INPUT_HINT } from '../../../constants/content'
import './InputUrl.scss'
import styles from './InputUrl.scss'

export default function InputUrl() {

  const dispatch = useDispatch()

  const handleUrlChange = event => { 
    const url = event.target.value
    dispatch(urlActions(url))
  }

  return (
    <label htmlFor="urlinput" className={styles.block}>
      <input 
        onChange={ handleUrlChange } 
        autoComplete='off' 
        type="url" 
        id="urlinput" 
        autoFocus 
        placeholder="&nbsp;" 
      />
      <span className={styles.blockLabel} >
        { INPUT_HINT }
      </span>
      <span className={styles.blockBorder} ></span>
    </label>
  )
}
