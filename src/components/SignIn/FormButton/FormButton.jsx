import React from 'react'
import classNames from 'classnames/bind'
import styles from './FormButton.scss'
import * as content from '../../../constants/signinContent'

export default function FormButton(props) {

 const { colorType } = props

  //STYLES
  const cx = classNames.bind(styles)
  const getClass = cx({
    block: true,
    blockWarm: colorType === 'warm',
    blockCold: colorType === 'cold',
  })

  return (
        <button 
          className={ getClass } 
          type='submit' 
          value='Submit form'>
          { content.SUBMIT }
        </button>
  )
}