import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'
import { navigationStates } from '../../constants/navigationStates'
import { mobileWidth } from '../../scss/mediaqueries.js'
import SigninContent from './SigninContent/SigninContent'
import SigninTabs from './SigninTabs/SigninTabs'
import styles from './SigninPage.scss'

export default function SigninPage(props) {

  const dispatch = useDispatch()
  const noAnimationOnRender = () => dispatch({ type: navigationStates.NOANIMATION })

  const [ activeTab, setActiveTab ] = useState('signin')
  const handleTabClick = e => setActiveTab(e.target.id)

  //STYLE
  const cx = classNames.bind(styles)
  
  const getClass = cx({
    block: true,
    blockMobile: useMediaQuery(mobileWidth),
  })

  return (
    <div className={ getClass }>
      <SigninTabs  activeTab={ activeTab }  handleTabClick={ handleTabClick } />
      <SigninContent 
        activeTab={activeTab} 
        handleOnClick={() => {
          noAnimationOnRender()
          props.history.push('/')
        }} 
      />
    </div>
  )
}