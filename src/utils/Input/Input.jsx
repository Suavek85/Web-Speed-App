import React from 'react'
import styles from './Input.scss'

export default function Input( { handleChange, label, ...props }) {

  return (
    <>
      { label? (<label>{ label }</label>) : null }
      <input 
        onChange={ handleChange }
        className={ styles.block }  
        {...props} />
    </>
  )
}