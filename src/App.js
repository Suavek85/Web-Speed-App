import React from 'react'
import InputCard from '../src/components/Input/InputCard/InputCard'
import Results from '../src/components/Results/Results'
import Navigation from '../src/components/Navigation/Navigation'
import './App.scss'

function App() {
  return (
    <div className='app__wrapper'>
      <Navigation />
      <InputCard />
      <Results />
    </div>
  )
}

export default App
