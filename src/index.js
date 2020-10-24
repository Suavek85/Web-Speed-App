import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import App from './App.jsx'
import * as serviceWorker from './serviceWorker'
import { stateReducer} from "./reducers/stateReducer"
import { toggleReducer } from "./reducers/toggleReducer"

const rootReducer = combineReducers({
  stateReducer,
  toggleReducer,
})

const store = createStore(rootReducer)
const url = process.env.PUBLIC_URL

ReactDOM.render(
  <BrowserRouter basename={ url } >
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
