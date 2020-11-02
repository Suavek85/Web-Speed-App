import React from 'react'
import classNames from 'classnames/bind'
import styles from './Button.scss'
import * as signincontent from '../../constants/signinContent.js'

export default function Button(props) {

  const { 
    btnStyle, 
    handleOnClick, 
    isMobileCloseContent, 
    isDesktopCloseContent, 
    isFormContent } = props

  //STYLES
  const cx = classNames.bind(styles)
  const getClass = cx({
    block: true,
    blockRegular: btnStyle === 'regular',
    blockOval: btnStyle === 'oval',
  })

  return (
    <button 
      className={ getClass } 
      type={ isFormContent? 'submit' : 'button' } 
      onClick={ handleOnClick }
      value={ isFormContent? 'Submit form' : 'value' }>
      { isFormContent && signincontent.SUBMIT }
      { isMobileCloseContent && 'Close' }
      { isDesktopCloseContent && 'x' }
    </button>
  )
}