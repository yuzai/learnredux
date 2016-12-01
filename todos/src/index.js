import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import reducer from './reducers'

//create store from reducer
const defaultState = {
  todos: [
    {
      completed: true,
      id:0,
      text:'222'
    }
  ],
  visibilityFilter:'SHOW_COMPLETED'
}
const store = createStore(reducer,defaultState)

//使用react-redux中的Provider来包含react的DOM,可以将store整体作为参数传递进去
render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'))
