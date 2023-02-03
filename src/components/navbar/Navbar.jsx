import React from 'react'
import './navbar.css'
import './navbarLinks.js'
import {BsClockFill} from 'react-icons/bs';
import {FaIdCard} from 'react-icons/fa'; 
import {AiFillTool} from 'react-icons/ai'; 
import {MdAdminPanelSettings} from 'react-icons/md'; 
import {FaInfoCircle} from 'react-icons/fa'; 
import {FaChalkboardTeacher} from 'react-icons/fa';
import { HashRouter as Router, Route, Link} from 'react-router-dom';





const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-upper'>
        
         <BsClockFill size={60} color="var(--textOrIcon-color)"/>
         <Router>
         <Link to="../teacher">
         <FaIdCard size={60} color="var(--textOrIcon-color)"/>
         </Link>
         </Router>
         
         
         <AiFillTool size={60} color="var(--textOrIcon-color)"/>
         <FaChalkboardTeacher size={60} color="var(--textOrIcon-color)"/>
     </div>
     <div className='navbar-lower'> 
     <button className='infoButton' id='infobut'>
     <FaInfoCircle size={60} color="var(--textOrIcon-color)"/>
     </button>
       
       <MdAdminPanelSettings size={60} color="var(--textOrIcon-color)"/>
     </div>
     </div>
  )
}



export default Navbar;