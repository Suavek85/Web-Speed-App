import React from 'react'
import InputCard from '../src/ui-components/Input/InputCard/InputCard'
import Results from '../src/ui-components/Results/Results'
import './App.scss'

function App() {
  return (
    <div className='app__wrapper'>
      <InputCard />
      <Results />
    </div>
  )
}

export default App
