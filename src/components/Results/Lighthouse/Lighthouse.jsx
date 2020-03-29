import React from 'react'
import WebOptimizeWrapper from '../../svgs/WebOptimizeWrapper'

export default function LightHouse() {

  return (
    <div style={{ display: 'flex', marginRight: '30px'}} >
      <WebOptimizeWrapper />
      <div style={{padding: "0px 30px"}}>
        <h1>Lighthouse<br/>Score</h1>
        <p >{ }</p>
        <p >{ }
          <span style={{color: 'ivory'}}></span>
        </p>
      </div>
    </div>
  )
}