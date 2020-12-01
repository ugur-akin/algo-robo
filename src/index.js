/* eslint-disable react/jsx-filename-extension */

// NOTE: Index.js is the only file with .js extension
//      that is allowed to include jsx in it. Changing
//      its extension is discouraged due to convention.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
