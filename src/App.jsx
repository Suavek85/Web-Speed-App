import React from 'react'
import { Switch, Route } from "react-router-dom"
  
import Homepage from './components/Homepage/Homepage'
import SigninPage from './components/SignIn/SigninPage'

export default function App() {

  return (
    <>
      <Switch >
        <Route exact path="/" component={ Homepage } />
        <Route exact path="/signin" component={ SigninPage } />
      </Switch>
    </>
  )

}

