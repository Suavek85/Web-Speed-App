import React from 'react'
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'
import { desktopWidth } from'../../../scss/mediaqueries'
import { Link } from 'react-router-dom'
import MenuLink from '../../../utils/MenuLink/MenuLink'
import NavOpenLink from '../../Navigation/Side/NavOpenLink/NavOpenLink'
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch'
import { APPTITLE, SIGN_IN } from '../../../constants/content'
import { smallMobileWidth, mobileWidth } from '../../../scss/mediaqueries'
import styles from './MainNavigation.scss'

export default function MainNavgation() {

  const isDesktop = useMediaQuery(desktopWidth)
  const settingsLink = <h2>Settings</h2>
  const settingsIcon = (
    <>
      <div className={ styles.blockMenu }></div>
      <div className={ styles.blockMenu }></div>
      <div className={ styles.blockMenu }></div>
    </>
  )

  //STYLE
  const cx = classNames.bind(styles)
  
  const getClass = cx({
    block: true,
    blockMobile: useMediaQuery(mobileWidth),
    blockSmallMobile: useMediaQuery(smallMobileWidth),
  })
  
  //if mobile/tablet inside SideNavigation render SignInLink (create a component for that) and toggleSwitch

  return (
    <section className={ getClass } >
      <Link to="/" className={ styles.blockTitle }>
        <h1>{ APPTITLE }</h1>
      </Link>
      <nav className={ styles.blockLinks }>
        {isDesktop && (
          <>
            <MenuLink linkPath="/signin" content={ SIGN_IN } />
            <NavOpenLink settings={settingsLink} />
            <ToggleSwitch />
          </>
        )}
        {!isDesktop && (
          <NavOpenLink settings={settingsIcon} />
        )}
      </nav> 
    </section>
  )
}