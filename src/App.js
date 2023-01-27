import React, { useEffect, useState } from 'react';
import {Login, Student, Register, Admin, ErrorNotFound, ErrorAdminLevelTooLow, ErrorAdminLevelTooHigh, Teacher} from './containers';
import {Navbar} from './components';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  /* useEffect(() => {
  }, []); */

  function getLogin() {
    const isLoggedIn = true;
    return isLoggedIn || true;
  }

  function getAdminLevel() {
    const adminLevel = 0;
    return adminLevel || 0;
  }

  function redirectFromHome() {
    const isLoggedIn = getLogin();
    const adminLevel = getAdminLevel();
    if (isLoggedIn) {
      if (adminLevel == 1) {
        return (
          <Navigate to="/teacher" replace={true} />
        );
      } else if (adminLevel == 2) {
        return (
          <Navigate to="/admin" replace={true} />
        );
      } else {
        return (
          <Navigate to="/student" replace={true} />
        );
      }
    } else {
      return (
        <Navigate to="/login" replace={true} />
      );
    }
  }

  function checkAuth(element, { adminLevel = {min: undefined, max: undefined}, loginPolicy }) {
    if (loginPolicy != undefined && getLogin() != loginPolicy) {
      if (loginPolicy == true) { 
        return (
          <Navigate to="/login" replace={true} />
        );
      } else if (loginPolicy == false) {
          return (
            <Navigate to="/" replace={true} />
          );
      }
    }
    
    if (adminLevel) {
      if (adminLevel.min != undefined && getAdminLevel() < adminLevel.min) {
        return (
          <ErrorAdminLevelTooLow />
        );
      }
      if (adminLevel.max != undefined && getAdminLevel() > adminLevel.max) {
        return (
          <ErrorAdminLevelTooHigh />
        );
      }
    }

    return element;
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={redirectFromHome()} />
          <Route path="/login" element={checkAuth(<Login />, {adminLevel: undefined, loginPolicy: false})} />
          <Route path="/register" element={checkAuth(<Register />, {adminLevel: undefined, loginPolicy: false})} />
          <Route path="/student" element={checkAuth(<Student />, {adminLevel: {min: 0, max: 0}, loginPolicy: true})} />
          <Route path='/teacher' element={checkAuth(<Teacher />, {adminLevel: {min: 1, max: 1}, loginPolicy: true})} />
          <Route path='/admin' element={checkAuth(<Admin />, {adminLevel: {min: 2, max: 2}, loginPolicy: true})} />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;