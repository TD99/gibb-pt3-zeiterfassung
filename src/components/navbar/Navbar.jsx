import React from 'react'
import './navbar.css'
import {BsClockFill} from 'react-icons/bs';
import {FaIdCard} from 'react-icons/fa'; 
import {AiFillTool} from 'react-icons/ai'; 
import {MdAdminPanelSettings} from 'react-icons/md'; 
import {FaInfoCircle} from 'react-icons/fa'; 
import {FaChalkboardTeacher} from 'react-icons/fa'; 



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-upper'>
         <BsClockFill size={30} color="var(--textOrIcon-color)"/>
         <FaIdCard size={30} color="var(--textOrIcon-color)"/>
         <AiFillTool size={30} color="var(--textOrIcon-color)"/>
         <FaChalkboardTeacher size={30} color="var(--textOrIcon-color)"/>
     </div>
     <div className='navbar-lower'> 
       <FaInfoCircle size={30} color="var(--textOrIcon-color)"/>
       <MdAdminPanelSettings size={30} color="var(--textOrIcon-color)"/>
     </div>
     </div>
  )
}

export default Navbar;