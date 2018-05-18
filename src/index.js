import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './store';

import "./index.css";

import App from "./App";

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.getElementById( 'root' ));


/*
Open src/index.js.\
Add a store prop that equals our imported store.
 */