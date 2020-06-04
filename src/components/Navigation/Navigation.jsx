import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useSelector, useDispatch } from "react-redux"

import NavClose from './NavClose/NavClose'
import styles from './Navigation.scss'
import { 
  collapseNavConfig, 
  expandNavConfig, 
  collapseBackgroundConfig, 
  expandBackgroundConfig } from './animatedStyles'
import { navigationStates } from '../../constants/navigationStates'


function Navigation() {

  //using useSpring instead of useTransition becouse of react-spring beta version bug
  const collapseNav = useSpring(collapseNavConfig)
  const expandNav = useSpring(expandNavConfig)
  const collapseBackground = useSpring(collapseBackgroundConfig)
  const expandBackground = useSpring(expandBackgroundConfig)

  const getToggleState = useSelector(state => state.toggleReducer.toggleNavigation)

  const dispatch = useDispatch()
  const handleCollapseMenu = () => dispatch({ type: navigationStates.COLLAPSE })

  const getAnimation = (getToggleState, expandAnimation, collapseAnimation) => {
    if (getToggleState === navigationStates.EXPAND) return expandAnimation
    if (getToggleState === navigationStates.COLLAPSE ) return collapseAnimation
    return
  }

  return (
    <>
      <animated.div 
        style={ getAnimation(getToggleState, expandBackground, collapseBackground) } 
        className={ styles.blockBackground } >
      </animated.div>
      <animated.div 
        style={ getAnimation(getToggleState, expandNav, collapseNav) } 
        className={ styles.block } 
      >
        <div className={ styles.blockCloseWrapper } >
          <NavClose handleOnClick={ handleCollapseMenu } />
        </div>
      </animated.div>
    </>
  )}
  
export default React.memo(Navigation)