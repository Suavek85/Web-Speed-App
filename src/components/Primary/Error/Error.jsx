import React from 'react'
import { useSelector } from "react-redux"
import styles from './Error.scss'  

export default function Error() {

  const errorMessageArray = [
    {status: 429, message:  `⚠️ We're busy...`},
    {status: 400, message:  `⚠️ Invalid url`},
    {status: 0, message:  ''}
  ]

  const errorStatus = useSelector(state => state.stateReducer.getErrorStatus)
  const errorMessage = errorMessageArray.filter(el => el.status === errorStatus )
  const { message, status } = errorMessage[0]
  const isError = status !== 0
  
  return (
    <>
      {isError && (
        <div className={styles.block} >
          {message}
        </div>
      )} 
    </>
  )
}