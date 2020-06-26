import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { xyz } from './reducers';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import './index.css';

const logger = createLogger();
const store = createStore(xyz, applyMiddleware(logger));
const root = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);

serviceWorker.unregister();
