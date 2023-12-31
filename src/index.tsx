import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './services';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);

reportWebVitals();
