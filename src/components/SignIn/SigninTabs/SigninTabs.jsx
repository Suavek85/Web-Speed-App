import React from 'react'
import classNames from 'classnames/bind'
import styles from './SigninTabs.scss'
import * as content from '../../../constants/signinContent'

export default function SigninTabs(props) {

  const { handleTabClick, activeTab } = props

  const cx = classNames.bind(styles)
  const getClass = arg => cx({
    headeritemWrapper: true,
    headeritemWrapperInactive: arg !== activeTab,
  })
  
  return (
      <div onClick={ handleTabClick } className={ styles.headerWrapper }>
        <div id='signin' className={ getClass('signin') }> <span>{ content.SIGNIN_TAB }</span></div>
        <div id='signup' className={ getClass('signup') }> <span>{ content.SIGNUP_TAB  }</span></div>
      </div>
  )
}