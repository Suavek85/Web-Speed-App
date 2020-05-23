import React from 'react'

export default function FormInput( { handleChange, label, ...props }) {

  return (
    <>
      { label? (<label>{ label }</label>) : null }
      <input 
        onChange={ handleChange } 
        {...props} />
    </>
  )
}