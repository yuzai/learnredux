import { combineReducers } from 'redux';

import todos from './todos';
import visible from './visible';

const rootReducer = combineReducers({
  todos,
  visible
});

export default rootReducer;
