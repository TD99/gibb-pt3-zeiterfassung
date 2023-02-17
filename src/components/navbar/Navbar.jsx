import React from 'react';
import './navbar.css';
import urls from './navbarLinks.json';
import {BsClockFill} from 'react-icons/bs';
import {FaIdCard} from 'react-icons/fa'; 
import {AiFillTool} from 'react-icons/ai'; 
import {MdAdminPanelSettings} from 'react-icons/md'; 
import {FaInfoCircle} from 'react-icons/fa'; 
import {FaChalkboardTeacher} from 'react-icons/fa';
<<<<<<< HEAD
<<<<<<< HEAD
import { Link} from 'react-router-dom';
=======
=======
>>>>>>> 874c4d6954d0020316d423baba295e30cfe08a3d
import {FaUserCircle} from 'react-icons/fa';
import {BrowserRouter as Router, Link, Switch, Route, Outlet} from 'react-router-dom';

import Teacher from '../../containers/teacher/Teacher';
<<<<<<< HEAD
>>>>>>> 874c4d6954d0020316d423baba295e30cfe08a3d
=======
>>>>>>> 874c4d6954d0020316d423baba295e30cfe08a3d

const Navbar = () => {
  const currPage = window.location.pathname;

  return (
    
    <div className='navbar'>
      <div className='navbar-upper'>
<<<<<<< HEAD
<<<<<<< HEAD
        <button onClick={() => {(urls[currPage] && urls[currPage].name)?alert(urls[currPage].name):alert("Not Available");}}>Page</button>
         <BsClockFill size={60} color="var(--textOrIcon-color)"/>
          <Link to='/teacher'>
            <FaIdCard size={60} color="var(--textOrIcon-color)"/>
          </Link>
         
         
         <AiFillTool size={60} color="var(--textOrIcon-color)"/>
         <FaChalkboardTeacher size={60} color="var(--textOrIcon-color)"/>
=======
        
        <Link to='/'>
         <BsClockFill size={60} color="var(--textOrIcon-color)"/>
=======
        
        <Link to='/'>
         <BsClockFill size={60} color="var(--textOrIcon-color)"/>
>>>>>>> 874c4d6954d0020316d423baba295e30cfe08a3d
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
<<<<<<< HEAD
>>>>>>> 874c4d6954d0020316d423baba295e30cfe08a3d
=======
>>>>>>> 874c4d6954d0020316d423baba295e30cfe08a3d
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