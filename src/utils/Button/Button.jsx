import React from 'react'
import classNames from 'classnames/bind'
import styles from './Button.scss'
import * as signincontent from '../../constants/signinContent.js'

export default function Button(props) {

 const { colors, content, isForm } = props

  //STYLES
  const cx = classNames.bind(styles)
  const getClass = cx({
    block: true,
    blockWarm: colors === 'warm',
    blockCold: colors === 'cold',
  })

  return (
        <button 
          className={ getClass } 
          type='submit' 
          value='Submit form'>
          { isForm && signincontent.SUBMIT }
          { content }
        </button>
  )
}