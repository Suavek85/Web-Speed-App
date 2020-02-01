import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useSelector, useDispatch } from "react-redux"

import './Navigation.scss'
import { navigationStates } from '../../constants/navigationStates'

function Navigation() {

  //using useSpring instead of useTransition becouse of react-spring beta version bug
  const collapseAnimation = useSpring({ 
    config:{ duration:330 }, 
    reset: true, 
    from: { left:'0px'}, 
    to:{ left:'-300px'}})

  const expandAnimation = useSpring({ 
    config:{ duration:330 }, 
    reset: true, 
    from: { left:'-300px'}, 
    to:{ left: '0px'}})

  const collapseBackground = useSpring({ 
    config:{ duration:330 }, 
    reset: true, 
    from: { opacity: .5, display: 'block'}, 
    to:{ opacity: 0, display: 'none' }})
    
  const expandBackground = useSpring({ 
    config:{ duration:330 }, 
    reset: true, 
    from: { opacity: 0, display: 'none'}, 
    to:{ opacity: .5, display: 'block'}})

  const getToggleState = useSelector(state => state.toggleReducer.toggleNavigation)

  const dispatch = useDispatch()

  const handleCollapseMenu = () => dispatch({ type: navigationStates.COLLAPSE })

  const getAnimation = (getToggleState) => {
    if (getToggleState === navigationStates.EXPAND) return expandAnimation
    if (getToggleState === navigationStates.COLLAPSE ) return collapseAnimation
    return
  }

  const getBackgroundAnimation = (getToggleState) => {
    if (getToggleState === navigationStates.EXPAND) return expandBackground
    if (getToggleState === navigationStates.COLLAPSE ) return collapseBackground
    return
  }

  return (
    <>
      <animated.div 
        style={getBackgroundAnimation(getToggleState)} 
        className='navigation__background'>
      </animated.div>
      <animated.div 
        style={getAnimation(getToggleState)} 
        className='navigation__wrapper' 
      >
        <div 
          onClick={handleCollapseMenu} 
          className='navigation__close'>x</div>
      </animated.div>
    </>
  )}


export default Navigation