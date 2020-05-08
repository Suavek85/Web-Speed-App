import React, { useRef } from 'react'

import { INPUT_HINT } from '../../../constants/content'
import './InputUrlUI.scss'
import styles from './InputUrlUI.scss'

export default function InputUrl() {

  const myTextInput = useRef('')

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
        ref={myTextInput}
      />
      <span className={ styles.blockLabel } >
        { INPUT_HINT }
      </span>
      <span className={ styles.blockBorder } ></span>
    </label>
  )
}
