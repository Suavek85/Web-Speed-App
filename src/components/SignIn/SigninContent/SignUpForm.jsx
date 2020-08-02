import React, { useState } from 'react'
import Input from '../../../utils/Input/Input'
import Button from '../../../utils/Button/Button'
import styles from './SignInForm.scss'
import * as content from '../../../constants/signinContent'

export default function SignUpForm() {

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
      <h2>{ content.NO_ACCOUNT }</h2>
      <span>{ content.SIGN_UP_PROMPT }</span>
      <form onSubmit={ handleSubmit } className={ styles.blockForm } >
        <Input 
          label={ content.USERNAME_LABEL }
          name='username' 
          type='text' 
          value={ email } 
          handleChange={ handleEmailChange } 
          required
        />
        <Input 
          label={ content.EMAIL_LABEL }
          name='email' 
          type='email' 
          value={ email } 
          handleChange={ handleEmailChange } 
          required
        />
        <Input 
          label={ content.PASSWORD_LABEL }
          name='password' 
          type='password' 
          value={password} 
          handleChange={ handlePasswordChange } 
          required
        />
        <Input 
          label={ content.CONFIRM_PASSWORD_LABEL }
          name='confirm password' 
          type='password' 
          value={ password } 
          handleChange={ handlePasswordChange } 
          required
        />
        <Button btnStyle='regular' isFormContent />
      </form>
    </div>
  )
}