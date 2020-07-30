import React from 'react'
import PropTypes from 'prop-types'
import styles from './NavClose.scss'

export default function NavClose(props) {

  return (
    <div 
      onClick={ props.handleOnClick } 
      className={ styles.block } 
    >
      x
    </div>
  )
}

NavClose.propTypes = {
  handleOnClick: PropTypes.func
}