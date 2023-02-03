import React from 'react'
import './navbar.css'
import './navbarLinks.js'
import {BsClockFill} from 'react-icons/bs';
import {FaIdCard} from 'react-icons/fa'; 
import {AiFillTool} from 'react-icons/ai'; 
import {MdAdminPanelSettings} from 'react-icons/md'; 
import {FaInfoCircle} from 'react-icons/fa'; 
import {FaChalkboardTeacher} from 'react-icons/fa';
import {BrowserRouter as Router, Link, Switch, Route, Outlet} from 'react-router-dom';

import Teacher from '../../containers/teacher/Teacher';

const Navbar = () => {
  return (
    
    <div className='navbar'>
      <div className='navbar-upper'>
        
         <BsClockFill size={60} color="var(--textOrIcon-color)"/>
         
         <Link to='/teacher'>
         <FaIdCard size={60} color="var(--textOrIcon-color)" /> 
         
         </Link>
         
    

        
         
        
          
      

         

         
         <AiFillTool size={60} color="var(--textOrIcon-color)"/>
         <FaChalkboardTeacher size={60} color="var(--textOrIcon-color)"/>
     </div>
     <div className='navbar-lower'> 
     <Link to='/info'>    <FaInfoCircle size={60} color="var(--textOrIcon-color)"/></Link>
 
    
       
       <MdAdminPanelSettings size={60} color="var(--textOrIcon-color)"/>
     </div>
     </div>
     
    
  )
}



export default Navbar;