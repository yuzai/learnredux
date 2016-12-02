import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/5000' component={App} />
    <Route path="/(:filter)" component={App} />
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
