import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import counter from './reducers';

const store = createStore(counter);

const rootEl = document.getElementById('root');

const render = ()=>ReactDOM.render(
  <Counter
  value={store.getState()}
  onincrement=()=>{store.dispatch({type:'INCREMENT'})}
  onincrement=()=>{store.dispatch({type:'DECREMENT'})}
  />
)
render();

store.subscribe(render);
