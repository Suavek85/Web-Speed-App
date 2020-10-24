import React from 'react'
import { useSelector } from "react-redux"
import { errorMessages, genericErrorMessage } from './errorMessages.js'
import styles from './Error.scss'  

export default function Error() {

  const errorStatus = useSelector(state => state.stateReducer.getErrorStatus) 
  const newErrorMessage = errorMessages.filter(el => el.status === errorStatus )
  newErrorMessage.length === 0 && newErrorMessage.push(genericErrorMessage)
  const { message } = newErrorMessage[0]
  
  return (
    <>
      {errorStatus && (
        <div className={styles.block} >
          {message}
        </div>
      )} 
    </>
  )
}