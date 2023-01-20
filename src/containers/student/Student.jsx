import React from 'react'
import './student.css';
import {Navbar, Header, TimeData} from '../../components';
const Student = () => {
  return (
    <div className="student">
      <div className="student-navbar">
        <Navbar />
        </div>
      <div className="student-content">
        <Header />
       
        <TimeData />
        </div>
    </div>
  )
}

export default Student