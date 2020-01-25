import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'

//INTERNAL
import InputButtonUI from './InputButtonUI'
import { appStates } from '../../../constants/states'
import firebase from './../../../firestore'

function InputButtonWrapper() {

  //FETCHING API KEY FROM FIRESTORE DB
  let key = ''
  const db = firebase.firestore()
  const docRef = db.collection("key").doc("maAkzowoP49Eu5OKNQV7")
  docRef.get().then(function(doc) {
    if (doc.exists) key = doc.data().keyid
  })
 
  //FETCHING API
  const [data, setData] = useState('placeholder')
  const inputUrl =  `https://www.weszlo.com`
  const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${inputUrl}&key=${key}`
  async function makeGetRequest() {
    let res = await axios.get(url)
    let allData = res.data
    setData(allData.captchaResult)
  }

  //ONCLICK
  const dispatch = useDispatch()
  const handleGetReportClick = () => { 
    dispatch({ type: appStates.LOADING })
    makeGetRequest() 
  }
  const getAppState = useSelector(state => state.getAppState)

  return (
    <InputButtonUI 
      data={data} 
      handleGetReportClick={handleGetReportClick} 
      getAppState={getAppState} 
    />
  )
}

export default InputButtonWrapper