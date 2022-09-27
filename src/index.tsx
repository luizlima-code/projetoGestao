/* eslint no-use-before-define: 0 */  // --> OFF
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from "./store";
import { Provider } from "react-redux";
import './index.css';
import { AuthProvider } from './contexts/auth';
import { Switch, Route } from 'react-router-dom2';
import { ConnectedRouter } from 'connected-react-router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </Provider>
);
