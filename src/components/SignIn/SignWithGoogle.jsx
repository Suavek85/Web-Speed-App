import React from 'react'

import { signInWithGoogle } from '../../firestore'


export default function SignWithGoogle() {
  return (
    <div  >
      <button onClick={ signInWithGoogle }>Sign in with Google</button>
    </div>
  )
}