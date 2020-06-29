import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App/App';
import './index.css';

import AppReducer from './containers/App/AppReducer';
import LoginReducer from './containers/Login/LoginReducer';
import RegisterReducer from './containers/Register/RegisterReducer';

const rootReducer = combineReducers({
  app: AppReducer,
  login: LoginReducer,
  register: RegisterReducer
});
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <div className='App'>
      <App />
    </div>
  </Provider>,
  rootElement
);

serviceWorker.unregister();
