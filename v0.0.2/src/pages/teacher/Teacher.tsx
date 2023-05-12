import './teacher.css';
import {Header, Blocks} from '@components/.';

const Teacher: React.FC = () => {
    const data = [
        {
            displayName: 'INF2021G'
        },
        {
            displayName: 'Praxistraining'
        }
    ];
    return (
        <div className="teacher">
            <Header />
            <Blocks data={data} />
        </div>
    )
} 

export default Teacher;