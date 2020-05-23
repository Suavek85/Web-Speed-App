import React, { useState } from 'react'

import SignWithGoogle from './SignWithGoogle'
import FormInput from './FormInput'
import styles from './SignIn.scss'
import * as content from '../../constants/signinContent'

export default function SignIn() {

  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    setEmail('')
    setPassword('')
  }

  const handleEmailChange = event => setEmail(event.target.value)
  const handlePasswordChange = event => setPassword(event.target.value)

  return (
    <div className={ styles.block } >
      <h2>{ content.ALREADY_ACCOUNT }</h2>
      <span>{ content.SIGN_IN_PROMPT }</span>
      <form onSubmit={ handleSubmit } className={ styles.blockForm } >
        <FormInput 
          label={ content.EMAIL_LABEL }
          className={ styles.blockInput } 
          name='email' 
          type='email' 
          value={ email } 
          handleChange={ handleEmailChange } 
          required
        />
        <FormInput 
          label={ content.PASSWORD_LABEL }
          className={ styles.blockInput } 
          name='password' 
          type='password' 
          value={password} 
          handleChange={ handlePasswordChange } 
          required
        />
        <button 
          className={ `${styles.blockButton} ${styles.blockButtonWarm}`} 
          type='submit' 
          value='Submit form'>
          { content.SUBMIT }
        </button>
      </form>
      <SignWithGoogle />
    </div>
  )
}