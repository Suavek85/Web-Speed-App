import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import './index.css'
import App from './App.jsx'
import * as serviceWorker from './serviceWorker'
import { stateReducer} from "./reducers/stateReducer"
import { toggleReducer } from "./reducers/toggleReducer"

const rootReducer = combineReducers({
  stateReducer,
  toggleReducer,
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
