import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { mobileWidth } from'../../../scss/mediaqueries'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import Button from '../../../utils/Button/Button'
import styles from './SigninContent.scss'

export default function SigninContent(props) {

  const { activeTab, handleOnClick } = props
  const isSignUp = activeTab === 'signup'
  const isMobile = useMediaQuery(mobileWidth)

  return (
    <div className={ styles.signinWrapper }>
      { isSignUp? <SignUpForm /> : <SignInForm /> }
      <Button 
        btnStyle={ isMobile? 'regular' : 'oval' }
        handleOnClick={ handleOnClick }
        isMobileCloseContent={ isMobile }
        isDesktopCloseContent={ !isMobile }
      />
    </div>
  )
}