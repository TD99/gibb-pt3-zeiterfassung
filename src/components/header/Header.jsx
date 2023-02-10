import React from 'react'
import TimeBlocks from '../timeBlocks/TimeBlocks'
import './header.css'
const Header = () => {
  return (
    <div className="header">
      <div className='header-title'>
      <p><h1>Guten Tag{(localStorage.getItem('firstname'))?(", " + localStorage.getItem('firstname')):("")}</h1></p>
      </div>
    </div> 
    
  )
}

export default Header