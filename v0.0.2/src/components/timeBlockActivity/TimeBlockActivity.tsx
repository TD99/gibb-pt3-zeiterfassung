import './timeBlockActivity.css'
import { FaBell } from 'react-icons/fa';

interface ContainerProps {
    title: string;
    subtitle: string;
    background: string;
}

const TimeBlockActivity: React.FC<ContainerProps> = ({ title, subtitle, background }) => {              
    return (  
        <div className='timeBlockActivity' style={{backgroundColor: background}}>
            <div className='timeBlockActivity-icon' >
                <FaBell size={80} color="white" />
            </div>
            <div className='timeBlockActivity-Title'>
                <h2>{title}</h2>
            </div>
            <div className='timeBlockActivity-subtitle'>
                <p>{subtitle}</p>
            </div>
        </div>
    )
};

export default TimeBlockActivity;