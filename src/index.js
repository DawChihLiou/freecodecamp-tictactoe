import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers'
import Main from './components/Main'
import './index.css'

const logger = createLogger()

const configureStore = () => {
  return createStore(
    reducer,
    applyMiddleware(thunk, logger)
  )
}

const store = configureStore()

render(
  <Provider store={ store }>
    <Main />
  </Provider>,
  document.getElementById('root')
);
