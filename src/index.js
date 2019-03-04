import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
// import App from './App';
import Inv from './Inv';
import * as serviceWorker from './serviceWorker';
import authReducer from './store/reducers/auth';
import itemReducer from './store/reducers/item';
import pantryReducer from './store/reducers/pantry';

axios.defaults.headers['Content-Type'] = 'application.json';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  items: itemReducer,
  pantry: pantryReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// const app = (
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

const inv = (
  <BrowserRouter>
    <Inv />
  </BrowserRouter>
)

ReactDOM.render(<Provider store={store}>{inv}</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
