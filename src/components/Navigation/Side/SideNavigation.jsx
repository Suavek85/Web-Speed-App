import React, { useEffect, useState} from 'react'
import { useSpring, animated } from 'react-spring'
import Button from '../../../utils/Button/Button'
import styles from './SideNavigation.scss'
import { 
  collapseNavConfig, 
  expandNavConfig, 
  collapseBackgroundConfig, 
  expandBackgroundConfig } from './animatedStyles'
import { navigationStates } from '../../../constants/navigationStates'
import { subscriber } from '../../../reducers/sideNavMessageService'

function SideNavigation() {

  const [navState, setNavState] = useState(navigationStates.NOANIMATION);
  useEffect(() => {
    subscriber.subscribe((state) => setNavState(state))
  });
  const handleCollapseMenu = () => subscriber.next(navigationStates.COLLAPSE)

  //using useSpring instead of useTransition becouse of react-spring beta version bug
  const collapseNav = useSpring(collapseNavConfig)
  const expandNav = useSpring(expandNavConfig)
  const collapseBackground = useSpring(collapseBackgroundConfig)
  const expandBackground = useSpring(expandBackgroundConfig)

  const getAnimation = (navState, expandAnimation, collapseAnimation) => {
    if (navState === navigationStates.EXPAND) return expandAnimation
    if (navState === navigationStates.COLLAPSE ) return collapseAnimation
    return
  }

  return (
    <>
      <animated.div 
        style={ getAnimation(navState, expandBackground, collapseBackground) } 
        className={ styles.blockBackground } >
      </animated.div>
      <animated.div 
        style={ getAnimation(navState, expandNav, collapseNav) } 
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
