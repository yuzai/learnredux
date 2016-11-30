import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,compose} from 'redux';
import counter from './reducers';
import Counter from './components/Counter'

const enhancers = compose(
  window.devToolsExtension?window.devToolsExtension():f=>f
);

const store = createStore(counter,0,enhancers);

const rootEl = document.getElementById('root');

const render = ()=>ReactDOM.render(
  <Counter
  value={store.getState()}
  //错误1，=附近不应该有空格
  onIncrement={()=>store.dispatch({type:'INCREMENT'})}
  onDecrement={()=>store.dispatch({type:'DECREMENT'})}
  />,
  rootEl
)
render();

//因为要subscribe，所以必须将reactDOM.render赋值给一个数值或者将该函数定义为一个有名函数
store.subscribe(render);
