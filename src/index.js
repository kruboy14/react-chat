import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/index.scss';
import 'emoji-mart/css/emoji-mart.css';
import { userActions } from './redux/actions';

store.dispatch(userActions.fetchUserData());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
