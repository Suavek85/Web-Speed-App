import React, { useState } from 'react'
import classNames from 'classnames/bind'
import { useDispatch } from "react-redux"
import { navigationStates } from '../../constants/navigationStates'

import SignIn from './SignIn'
import SignUp from './SignUp'
import NavClose from '../Navigation/NavClose/NavClose'
import styles from './SignInWrapper.scss'
import * as content from '../../constants/signinContent'

export default function SignInWrapper(props) {

  const dispatch = useDispatch()
  const noAnimationOnRender = () => dispatch({ type: navigationStates.NOANIMATION })

  const [ activeTab, setActiveTab ] = useState('signin')

  const handleTabClick = e => setActiveTab(e.target.id)
  const isSignUp = activeTab === 'signup'

  let cx = classNames.bind(styles)
  let getClass = arg => cx({
    headeritemWrapper: true,
    headeritemWrapperInactive: arg !== activeTab,
  })
  
  return (

    <div className={ styles.mainWrapper }>
      <div onClick={ handleTabClick }className={ styles.headerWrapper }>
        <div id='signin' className={ getClass('signin') }> <span>{ content.SIGNIN_TAB }</span></div>
        <div id='signup' className={ getClass('signup') }> <span>{ content.SIGNUP_TAB  }</span></div>
      </div>
      <div className={ styles.signinWrapper }>
        <div className={ styles.navcloseWrapper }>
          <NavClose handleOnClick={() => {
            noAnimationOnRender()
            props.history.push('/')}
          } />
        </div>
        { isSignUp? <SignUp /> : <SignIn /> }
      </div>
    </div>
   
  )
}