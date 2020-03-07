import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import './index.css'
import App from './App.jsx'
import * as serviceWorker from './serviceWorker'
import { stateReducer} from "./reducers/stateReducer"
import { toggleReducer } from "./reducers/toggleReducer"
import { dataReducer } from "./reducers/dataReducer"
import { urlReducer } from "./reducers/urlReducer"

const rootReducer = combineReducers({
  stateReducer,
  toggleReducer,
  dataReducer,
  urlReducer
})

const store = createStore(rootReducer)

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
