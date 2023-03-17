import React from 'react'
import './student.css';
import {Header, TimeBlocks, TimeData} from '../../components';
const Student = () => {
  return (
    <div className="student">
      <Header />
      <TimeBlocks />
      {/*<TimeData />*/}
    </div>
  )
}

export default Student