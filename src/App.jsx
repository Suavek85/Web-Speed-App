import React from 'react'
import { Switch, Route } from "react-router-dom"
  
import Homepage from './components/Homepage/Homepage'
import SignInSignUp from './components/SignIn/SignInSignUp'

export default function App() {

  return (
    <>
      <Switch >
        <Route exact path="/" component={ Homepage } />
        <Route exact path="/signin" component={ SignInSignUp } />
      </Switch>
    </>
  )

}

