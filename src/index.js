import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import removeReducer from "./feature/RemoveSplash"
import userReducer from "./feature/NavColor"
import './index.css';
import App from './App';


const store = configureStore({
  reducer:{
    color : userReducer,
    remove : removeReducer
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

