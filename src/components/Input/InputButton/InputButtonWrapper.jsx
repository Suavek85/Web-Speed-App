import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'

//INTERNAL
import InputButtonUI from './InputButtonUI'
import { appStates } from '../../../constants/states'
import firebase from './../../../firestore'
import getData from '../../../actions/dataActions.js'

function InputButtonWrapper() {

  //FETCHING API KEY FROM FIRESTORE DB
  let key = ''
  const db = firebase.firestore()
  const docRef = db.collection("key").doc("maAkzowoP49Eu5OKNQV7")
  docRef.get().then(doc => { if(doc.exists) key = doc.data().keyid })
 
  //FETCHING API

  //useSelector to take url from store

  const getUrlState = useSelector(state => state.urlReducer.getUrl)
  const inputUrl =  getUrlState

  const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${inputUrl}&key=${key}`

  const dispatch = useDispatch()

  async function makeGetRequest() {
    let res = await axios.get(url)
    let allData = res.data
    console.log(allData)
    dispatch(getData(allData.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category))
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