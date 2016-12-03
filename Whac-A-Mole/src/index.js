import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import store from './store'
// import { Router, Route } from 'react-router';

render(
  (
  <Provider store={store}>
    <App />
  </Provider>
  ),
  document.getElementById('root')
)
