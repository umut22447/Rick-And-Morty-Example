import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './contexts/AuthContext'
import { ListProvider } from './contexts/ListContext'

ReactDOM.render(
  <AuthProvider>
    <ListProvider>
      <App />
    </ListProvider>
  </AuthProvider>,
  document.getElementById('root')
);