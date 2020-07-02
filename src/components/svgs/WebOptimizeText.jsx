import React from "react"
import { useSpring, animated } from 'react-spring'

export default function WebOptimizeText(props) {

  const { xCord, yCord, value } = props

  const styles = useSpring({  
    from: { number: 0 }, 
    to: { number: value },
    config: { mass: 25, tension: 25, friction: 25 }
    //config: {duration: value * 200} 
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


