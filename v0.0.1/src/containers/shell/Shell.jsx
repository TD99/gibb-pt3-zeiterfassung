import React from 'react'
import './shell.css';
import { Navbar } from '../../components';
import { Login, Register, Student, Classes, Admin, ErrorNotFound, Info } from '../../containers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Shell = () => {
  return (
    <BrowserRouter>
      <div className="shell">
        <Navbar />
        <div className="shell-content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/student" element={<Student />} />
              <Route path='/classes' element={<Classes />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/info' element={<Info />} />
              <Route path="*" element={<ErrorNotFound />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Shell;