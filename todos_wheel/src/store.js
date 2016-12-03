import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import rootReducer from './reducers';
import { browserHistory } from 'react-router';

import todos from './data/todos'
const enhancers = compose(
  window.devToolsExtension?window.devToolsExtension():f=>f
);

const defaultstate = {
  todos,
  visible:'SHOW_ALL'
}

const store = createStore(rootReducer,defaultstate,enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
