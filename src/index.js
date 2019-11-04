import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';


import App from './app.js';
let store = createStore();
function Index() {
  return (
    <Provider store={store}>
    <App />
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Index />, rootElement);