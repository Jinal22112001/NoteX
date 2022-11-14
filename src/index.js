import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./store"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";


const root = ReactDOM.createRoot(document.getElementById('root'));

const options = {
  timeout: 1500,
  positions: positions.TOP_RIGHT,
  transitions: transitions.FADE
}

root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options} >
      <BrowserRouter>
        <App />
      </BrowserRouter >
    </AlertProvider>
  </Provider>
);
