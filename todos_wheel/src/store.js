import { createStore, compose } from 'redux';

import rootReducer from './reducers';
import todos from './data/todos'
const enhancers = compose(
  window.devToolsExtension?window.devToolsExtension():f=>f
);

const defaultstate = {
  todos,
  visible:'SHOW_ALL'
}

const store = createStore(rootReducer,defaultstate,enhancers);

export default store;
