import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { GetCareRecipient } from './app/careRecipient/localStorage'
import { hydrate } from './app/careRecipient/reducers'
import store from './app/store'
import * as serviceWorker from './serviceWorker'

const careRecipientLocal = GetCareRecipient()
if (careRecipientLocal) store.dispatch(hydrate(careRecipientLocal))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
