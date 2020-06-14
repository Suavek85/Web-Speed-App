import React from "react"
//import { useSpring, animated } from 'react-spring'

//INTERNAL
import './ScoreCircle.scss'

export default function ScoreCircle(props) {

  const { score } = props
  const scoreCircle = score? Math.floor(score * 100) : 0
  const strokeValue = `${ scoreCircle }, 100`

  return (

    <div className="chart-wrapper">
      <svg viewBox="0 0 36 36" className="circular-chart orange">
        <path className="circle-bg"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path className="circle"
          strokeDasharray={ strokeValue }
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="21.5" className="percentage-text">{ scoreCircle }</text>
      </svg>
    </div>
  
  )
}


