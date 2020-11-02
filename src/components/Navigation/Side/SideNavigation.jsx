import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useSelector, useDispatch } from "react-redux"
import Button from '../../../utils/Button/Button'
import styles from './SideNavigation.scss'
import { 
  collapseNavConfig, 
  expandNavConfig, 
  collapseBackgroundConfig, 
  expandBackgroundConfig } from './animatedStyles'
import { navigationStates } from '../../../constants/navigationStates'


function SideNavigation() {

  const getToggleState = useSelector(state => state.toggleReducer.toggleNavigation)

  //using useSpring instead of useTransition becouse of react-spring beta version bug
  const collapseNav = useSpring(collapseNavConfig)
  const expandNav = useSpring(expandNavConfig)
  const collapseBackground = useSpring(collapseBackgroundConfig)
  const expandBackground = useSpring(expandBackgroundConfig)


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
        <div style={{transform: 'translate(15px, 15px)',}}>
          <Button 
            btnStyle='oval' 
            handleOnClick={ handleCollapseMenu }
            isDesktopCloseContent
          />
        </div>
      </animated.div>
    </>
  )}
  
export default React.memo(SideNavigation)
