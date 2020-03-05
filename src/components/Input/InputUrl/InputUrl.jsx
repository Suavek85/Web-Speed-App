import React from 'react'
import { useDispatch } from "react-redux"

import urlActions from '../../../actions/urlActions.js'
import './InputUrl.scss'

function InputUrl() {

  //create a function to dispatch url

  const dispatch = useDispatch()

  const handleUrlChange = event => { 

    const url = event.target.value
    dispatch(urlActions(url))
  }

  return (
    <label htmlFor="urlinput" className="urlinput">
      <input onChange={ handleUrlChange} autoComplete='off' type="url" id="urlinput" autoFocus placeholder="&nbsp;" />
      <span className="label">Enter your website url in this format https://www.bbc.co.uk/</span>
      <span className="border"></span>
    </label>
  )
}

export default InputUrl