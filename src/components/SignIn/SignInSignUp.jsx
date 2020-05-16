import React from 'react'
import { useDispatch } from "react-redux"
import { navigationStates } from '../../constants/navigationStates'
import SignWithGoogle from './SignWithGoogle'


export default function SignInSignUp(props) {

  const dispatch = useDispatch()
  const noAnimationOnRender = () => dispatch({ type: navigationStates.NOANIMATION })

  return (
    <div >
      <button 
        onClick={() => {
          noAnimationOnRender()
          props.history.push('/')}
        }>
          Close
      </button>
      <SignWithGoogle />
    </div>
  )
}