import React from 'react'
import InputUrlUI from './InputUrlUI'
import { useDispatch } from "react-redux"
import urlActions from '../../../actions/urlActions.js'


export default function InputUrl() {

  const dispatch = useDispatch()

  const handleUrlChange = event => { 
    const url = event.target.value
    dispatch(urlActions(url))
  }

  return (
    <InputUrlUI handleUrlChange={ handleUrlChange } />
  )
}
