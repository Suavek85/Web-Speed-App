import React from 'react'
import { signInWithGoogle } from '../../firebase/firebase'
import styles from './SignIn.scss'

export default function SignWithGoogle() {
  return (
    <button 
      onClick={ signInWithGoogle }
      className={ `${styles.blockButton} ${styles.blockButtonCold}` }>
        Sign in with Google
    </button>
  )
}