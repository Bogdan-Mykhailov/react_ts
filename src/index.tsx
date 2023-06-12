import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);

reportWebVitals();
