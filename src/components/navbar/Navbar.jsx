import React from 'react';
import './navbar.css';
import {BsClockFill} from 'react-icons/bs';
import {AiFillTool} from 'react-icons/ai'; 
import {FaInfoCircle, FaUserCircle, FaChalkboardTeacher, FaIdCard} from 'react-icons/fa'; 
import {BrowserRouter as Router, Link, Switch, Route, Outlet} from 'react-router-dom';

const Navbar = () => {
  const currPage = window.location.pathname;

  return (
    <div className='navbar'>
      <div className='navbar-body-wrapper'>
        <div className='navbar-container'>
          <Link to='/'>
            <BsClockFill className="nav-logo"/>
          </Link>
        </div>
        <hr />
        <div className='navbar-container'>         
          <Link to='/student'>
            <FaIdCard className="nav-icon" />
          </Link>

          <Link to='/teacher'>
            <FaChalkboardTeacher className="nav-icon" />
          </Link>

          <Link to='/admin'>
            <AiFillTool className="nav-icon" />
          </Link>
        </div>
      </div>
      <div className='navbar-container'> 
        <Link to='/account'>
          <FaUserCircle className="nav-icon" />
        </Link>
        
        <Link to='/info'>
          {/* <BsInfoSquareFill className="nav-icon" /> */}
        </Link>
      </div>
    </div>
  )
}

export default Navbar;