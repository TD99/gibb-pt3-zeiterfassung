import React from 'react'
import './shell.css';
import { Navbar } from '../../components';
import { Login, Register, Student, Teacher, Admin, ErrorNotFound } from '../../containers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Shell = () => {
  return (
    <div className="shell">
      <Navbar className="main-nav" />
      <div className="shell-content">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/student" element={<Student />} />
            <Route path='/teacher' element={<Teacher />} />
            <Route path='/admin' element={<Admin />} />
            <Route path="*" element={<ErrorNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default Shell;