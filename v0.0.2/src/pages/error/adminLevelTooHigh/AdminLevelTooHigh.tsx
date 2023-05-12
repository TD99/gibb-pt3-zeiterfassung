import './adminLevelTooHigh.css';
import { Link } from "react-router-dom";

const AdminLevelTooHigh: React.FC = () => {
    return (
        <div>
            <h1>AdminLevelTooHigh</h1>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default AdminLevelTooHigh;