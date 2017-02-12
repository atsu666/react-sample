import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import React from 'react';
import App from './containers/App.jsx';
import reducer from './reducers/index.js';


const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
