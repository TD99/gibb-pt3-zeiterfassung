import React from 'react'
import './shell.css';
import { Navbar } from '../../components';
import { Login, Register, Student, Teacher, Admin, ErrorNotFound, Info } from '../../containers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Shell = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="shell">
        <Navbar className="main-nav" />
        <div className="shell-content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/student" element={<Student />} />
              <Route path='/teacher' element={<Teacher />} />
              <Route path='/admin' element={<Admin />} />
              <Route path="*" element={<ErrorNotFound />} />
            </Routes>
        </div>
      </div>
=======
=======
>>>>>>> 874c4d6954d0020316d423baba295e30cfe08a3d
    <div className="shell">
      <Navbar className="main-nav" />
      <div className="shell-content">
        
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/student" element={<Student />} />
            <Route path='/teacher' element={<Teacher />} />
            <Route path='/info' element={<Info />} />
            <Route path='/admin' element={<Admin />} />
            <Route path="*" element={<ErrorNotFound />} />
          </Routes>
    
      </div>
    </div>
<<<<<<< HEAD
>>>>>>> 874c4d6954d0020316d423baba295e30cfe08a3d
=======
>>>>>>> 874c4d6954d0020316d423baba295e30cfe08a3d
    </BrowserRouter>
  )
}

export default Shell;