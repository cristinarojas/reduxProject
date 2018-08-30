import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Dependencies
import { createStore, combineReducers } from 'redux';

// The app can use the store
import { Provider } from 'react-redux';

// The reducers
import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';

// combine reducers function
const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
})

// store
const store = createStore(
  allReducers,
  {
    products: [{name: 'iphone'}],
    user: 'Michael'
  },
  window.devToolsExtension && window.
    devToolsExtension()
);

ReactDOM.render(<Provider store={store}><App aRandomProps="whatever"/></Provider>, document.getElementById('root'));
registerServiceWorker();
