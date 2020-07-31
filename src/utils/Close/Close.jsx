import React from 'react'
import PropTypes from 'prop-types'
import styles from './Close.scss'

const ConditionalWrapper = ({ isDesktop, wrapper, children }) => 
  isDesktop ? wrapper(children) : children;


export default function Close(props) {

  const { handleOnClick, isDesktop, isSideNav } = props
  const isDesktopOrSideNav = !!(isDesktop || isSideNav)

  return (
      <ConditionalWrapper
        isDesktop={isDesktop}
        wrapper={children => <div className={ styles.blockWrapper }>{children}</div>}
      >
        <div 
          onClick={ handleOnClick } 
          className={ isDesktopOrSideNav && styles.block } 
        >
          { isDesktopOrSideNav ? 'x' : 'Close' }
        </div>
      </ConditionalWrapper>
  )
}

Close.propTypes = {
  handleOnClick: PropTypes.func
}