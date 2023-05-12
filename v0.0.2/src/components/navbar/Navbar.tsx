import './navbar.css';
import { FaInfoCircle, FaUserCircle, FaChalkboardTeacher, FaCalendarAlt } from 'react-icons/fa'; 
import { MdAdminPanelSettings } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Clock } from '@components/.';

const Navbar = () => {
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