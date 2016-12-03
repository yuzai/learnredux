import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import todos from './todos';
import visible from './visible';

const rootReducer = combineReducers({
  todos,
  visible,
  routing:routerReducer
});

export default rootReducer;
