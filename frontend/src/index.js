import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import AuthContextProvider from './Contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import ListContextProvider from './Contexts/ListContext';
import TaskContextProvider from './Contexts/TaskContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ListContextProvider>
      <TaskContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TaskContextProvider>
    </ListContextProvider >
  </AuthContextProvider>
);