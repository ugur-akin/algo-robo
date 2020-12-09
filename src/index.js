/* eslint-disable react/jsx-filename-extension */

// NOTE: Index.js is the only file with .js extension
//      that is allowed to include jsx in it. Changing
//      its extension is discouraged due to convention.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function setVDims() {
  const vw = document.documentElement.clientWidth / 100;
  const vh = document.documentElement.clientHeight / 100;
  document.documentElement.style.setProperty('--vw', `${vw}px`);
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVDims();
window.addEventListener('resize', setVDims);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
