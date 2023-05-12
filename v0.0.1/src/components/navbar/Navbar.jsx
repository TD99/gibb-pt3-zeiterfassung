import React from 'react';
import './navbar.css';
import {BsClockFill} from 'react-icons/bs';
import {AiFillTool} from 'react-icons/ai'; 
import {FaInfoCircle, FaUserCircle, FaChalkboardTeacher, FaIdCard, FaCalendarAlt} from 'react-icons/fa'; 
import {MdAdminPanelSettings} from 'react-icons/md';
import {BrowserRouter as Router, Link, Switch, Route, Outlet} from 'react-router-dom';
import {Clock} from '../index.js';

const Navbar = () => {
  const currPage = window.location.pathname;

  return (
    <div className='navbar'>
      <div className='navbar-body-wrapper'>
        <div className='navbar-container'>
          <Link to='/'>
            <Clock />
          </Link>
        </div>
        <hr />
        <div className='navbar-container'>         
          <Link to='/student'>
            <FaCalendarAlt className="nav-icon" />
          </Link>

          <Link to='/classes'>
            <FaChalkboardTeacher className="nav-icon" />
          </Link>

          <Link to='/admin'>
            <MdAdminPanelSettings className="nav-icon" />
          </Link>
        </div>
      </div>
      <div className='navbar-container'> 
        <Link to='/account'>
          <FaUserCircle className="nav-icon" />
        </Link>
        
        <Link to='/info'>
          <FaInfoCircle className="nav-icon" />
        </Link>
      </div>
    </div>
  )
}

export default Navbar;