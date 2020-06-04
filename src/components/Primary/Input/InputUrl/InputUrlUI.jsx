import React from 'react'

import { INPUT_HINT } from '../../../../constants/content'
import './InputUrlUI.scss'
import styles from './InputUrlUI.scss'

export default function InputUrl() {

  return (
    <label 
      htmlFor="urlinput" 
      className={ styles.block }>
      <input 
        autoComplete='off' 
        type="url" 
        id="urlinput" 
        autoFocus 
        placeholder="&nbsp;" 
      />
      <span className={ styles.blockLabel } >
        { INPUT_HINT }
      </span>
      <span className={ styles.blockBorder } ></span>
    </label>
  )
}
