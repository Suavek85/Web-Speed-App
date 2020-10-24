import React from "react"
import { useSpring, animated } from 'react-spring'

export default function MainScoreText(props) {
  const { xCord, yCord, value } = props

  const styles = useSpring({  
    from: { number: 0 }, 
    to: { number: value },
    config: { duration: 2000 },
  })

  return (
    <animated.text 
      x={xCord}
      y={yCord}
      fill="darkslategrey" 
      fontWeight='bold'
      fontFamily='Orbitron, sans-serif' 
      fontSize="65" > 
      {value && styles.number.interpolate(number => Math.floor(number))}
    </animated.text>
  )
}


