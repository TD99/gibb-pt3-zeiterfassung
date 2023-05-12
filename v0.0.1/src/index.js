import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContext, { AuthProvider } from './context/AuthProvider';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import Student from './containers/student/Student';
//import Admin from './containers/admin/Admin';
//import Teacher from './containers/teacher/Teacher';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
     <App/>
    </AuthProvider>
  </React.StrictMode>
);