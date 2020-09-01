import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './redux/store.js';

import './styles/index.scss';
import App from './App';

import './styles/index.scss';
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById('root')
);
