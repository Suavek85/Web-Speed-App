import React from 'react'
import styles from './FormInput.scss'

export default function FormInput( { handleChange, label, ...props }) {

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