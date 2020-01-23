import firebase from 'firebase'

export const firebaseConfig = {
  apiKey: "AIzaSyD8Ez5Z6p41SfoKnK_nUHAV5PZPtqKkDag",
  authDomain: "speed-web-1577099660929.firebaseapp.com",
  databaseURL: "https://speed-web-1577099660929.firebaseio.com",
  projectId: "speed-web-1577099660929",
  storageBucket: "speed-web-1577099660929.appspot.com",
  messagingSenderId: "72511905974",
  appId: "1:72511905974:web:e4890a7557cbaa3de2c617"
}

firebase.initializeApp(firebaseConfig)

export default firebase