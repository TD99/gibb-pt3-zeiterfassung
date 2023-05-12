import './adminLevelTooLow.css';
import { Link } from "react-router-dom";

const AdminLevelTooLow: React.FC = () => {
    return (
        <div>
            <h1>AdminLevelTooLow</h1>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default AdminLevelTooLow;