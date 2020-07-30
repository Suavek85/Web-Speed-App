import React from 'react'
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import NavOpenLink from '../../Navigation/Side/NavOpenLink/NavOpenLink'
import { APPTITLE, SIGN_IN } from '../../../constants/content'
import { smallMobileWidth, mobileWidth } from '../../../scss/mediaqueries'
import styles from './MainNavigation.scss'

export default function MainNavgation() {

  //STYLE
  const cx = classNames.bind(styles)
  
  const getClass = cx({
    block: true,
    blockMobile: useMediaQuery(mobileWidth),
    blockSmallMobile: useMediaQuery(smallMobileWidth),
  })


  return (
    <div className={ getClass } >
      <Link to="/" className={ styles.blockTitle }>
        <h1>{ APPTITLE }</h1>
      </Link>
      <div className={ styles.blockLinks }>
        <Link to="/signin" className={ styles.blockTitle } >
          <h2>{ SIGN_IN }</h2>
        </Link>
        <NavOpenLink />
      </div> 
    </div>
  )
}