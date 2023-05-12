import './timeBlockModul.css';
import { FaSchool } from 'react-icons/fa';

interface ContainerProps {
    title: string;
    subtitle: string;
}

const TimeBlockModul: React.FC<ContainerProps> = ({ title, subtitle }) => {          
    return (
        <div className='timeBlockModul'>
            <div className='timeBlockModul-icon'>
                <FaSchool color='#DDDEE3' size={80}/>
            </div>
            <div className='timeBlockModul-Title'>
                <h2>{title}</h2>
            </div>
            <div className='timeBlockModul-subtitle'>
                <p>{subtitle}</p>
            </div>
        </div>
    )
};

export default TimeBlockModul;