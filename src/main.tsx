// import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { HashRouter } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './assets/scss/all.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
