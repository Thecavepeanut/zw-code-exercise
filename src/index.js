import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './spas/home/reducers';

// Components
import App from './spas/home/containers/app';

const middleware = [thunk];

middleware.push(createLogger());

const store = createStore(reducer, applyMiddleware(...middleware));
console.log(process.env.NODE_ENV);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-spa'),
);
