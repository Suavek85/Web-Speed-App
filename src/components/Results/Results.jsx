import React from 'react'
import './Results.scss'
import ResultsTop from './ResultsTop/ResultsTop'
import ResultsBottom from './ResultsBottom/ResultsBottom'

function Results() {
  return (
    <div className='results__wrapper'>
      <ResultsTop />
      <ResultsBottom />
    </div>
  )
}

export default Results