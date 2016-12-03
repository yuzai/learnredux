import { createStore, compose } from 'redux'
import rootReducer from './reducers/index'

const defaultstate = {
  location:25,
  pause:false,
  score:0
};

const enhancers = compose(
  window.devToolsExtension?window.devToolsExtension():f=>f
);

const store = createStore(rootReducer,defaultstate,enhancers);

export default store;
