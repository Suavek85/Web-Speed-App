import React from 'react'
import { signInWithGoogle } from '../../../firebase/firebase'

export default function SignWithGoogle() {
  return (
    <button 
      onClick={ signInWithGoogle }
    >
        Sign in with Google
    </button>
  )
}