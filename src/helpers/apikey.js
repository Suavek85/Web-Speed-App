import firebase from '../firebase/firebase'

export default function () {
  let key = ''
  const db = firebase.firestore()
  const docRef = db.collection("key").doc("maAkzowoP49Eu5OKNQV7")
  docRef.get().then(doc => { if(doc.exists) key = doc.data().keyid })
  return key
}