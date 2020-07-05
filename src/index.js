import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import './index.css';

import reducer from './reducer';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));
const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
      <App />
  </Provider>,
  rootElement
);

serviceWorker.unregister();
