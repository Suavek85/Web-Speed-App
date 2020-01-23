import React from 'react'
import InputCard from '../src/ui-components/Input/InputCard/InputCard'
import Results from '../src/ui-components/Results/Results'
import Navigation from '../src/ui-components/Navigation/Navigation'
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
