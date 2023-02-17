import React from 'react';
import './navbar.css';
import {BsClockFill} from 'react-icons/bs';
import {FaIdCard} from 'react-icons/fa'; 
import {AiFillTool} from 'react-icons/ai'; 
import {MdAdminPanelSettings} from 'react-icons/md'; 
import {FaInfoCircle} from 'react-icons/fa'; 
import {FaChalkboardTeacher} from 'react-icons/fa';
import {FaUserCircle} from 'react-icons/fa';
import {BrowserRouter as Router, Link, Switch, Route, Outlet} from 'react-router-dom';

const Navbar = () => {
  const currPage = window.location.pathname;

  return (
    <div className='navbar'>
      <div className='navbar-upper'>
        <Link to='/'>
         <BsClockFill size={60} color="var(--textOrIcon-color)"/>
        </Link>
         
         <Link to='/student'>
          <FaIdCard size={60} color="var(--textOrIcon-color)" />
         </Link>

         <Link to='/teacher'>
          <FaChalkboardTeacher size={60} color="var(--textOrIcon-color)"/>
         </Link>

         <Link to='/admin'>
          <AiFillTool size={60} color="var(--textOrIcon-color)"/>
         </Link>
      </div>
      <div className='navbar-lower'> 
        <Link to='/account'>
          <FaUserCircle size={60} color="var(--textOrIcon-color)"/>
        </Link>
        
        <Link to='/info'>
          <FaInfoCircle size={60} color="var(--textOrIcon-color)"/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;