import React from 'react'
import './student.css';
import {Navbar, Header, TimeBlocks, TimeData} from '../../components';
const Student = () => {
  return (
    <div className="student">
      <div className="student-navbar">
        <Navbar />
        </div>
      <div className="student-content">
        <Header />
        <TimeBlocks />
        <TimeData />
        </div>
    </div>
  )
}

export default Student