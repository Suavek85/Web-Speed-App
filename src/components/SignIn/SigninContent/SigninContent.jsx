import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { mobileWidth } from'../../../scss/mediaqueries'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import Close from '../../../utils/Close/Close'
import Button from '../../../utils/Button/Button'
import styles from './SigninContent.scss'

export default function SigninContent(props) {

  const { activeTab, handleOnClick } = props
  const isSignUp = activeTab === 'signup'
  const isMobile = useMediaQuery(mobileWidth)

  const navCloseDesktop = <Close handleOnClick={handleOnClick} isDesktop />
  const navCloseMobile = <Close handleOnClick={handleOnClick} />

  return (
      <div className={ styles.signinWrapper }>
        { isSignUp? <SignUpForm /> : <SignInForm /> }
        { isMobile? (
          <Button 
            colors='warm' 
            content={ navCloseMobile }
          />
        ) : navCloseDesktop  }
      </div>
  )
}