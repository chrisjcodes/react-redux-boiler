import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';

import reducer from 'reducers';
import App from 'components/enviroments/App';

const logger = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(logger)
);
const mount = document.getElementById('mount');

render(<Provider store={store}>
  <App/>
</Provider>, mount);