import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'

//INTERNAL
import InputButtonUI from './InputButtonUI'
import { appStates } from '../../../constants/states'
import firebase from './../../../firestore'
import getState from '../../../actions/stateActions.js'

function InputButtonWrapper() {

  //FETCHING API KEY FROM FIRESTORE DB
  let key = ''
  const db = firebase.firestore()
  const docRef = db.collection("key").doc("maAkzowoP49Eu5OKNQV7")
  docRef.get().then(doc => { if(doc.exists) key = doc.data().keyid })
 
  //FETCHING API

  //useSelector to take url from store

  const getUrlState = useSelector(state => state.urlReducer.getUrl)
  const inputUrl = getUrlState

  const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${inputUrl}&key=${key}`

  const dispatch = useDispatch()
 
  async function makeGetRequest() {
    try {
      let res = await axios.get(url)
      let allData = res.data      
      dispatch(getState(allData.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category))
    } catch(err) {
      dispatch({ type: appStates.ERROR })
      setTimeout(function () {
        dispatch({ type: appStates.INACTIVE })
      }, 4000)
    }
  }

  const handleGetReportClick = () => { 
    dispatch({ type: appStates.LOADING })
    makeGetRequest() 
  }
  const getAppState = useSelector(state => state.stateReducer.getAppState)

  return (
    <InputButtonUI 
      handleGetReportClick={handleGetReportClick} 
      getAppState={getAppState} 
    />
  )
}

export default InputButtonWrapper