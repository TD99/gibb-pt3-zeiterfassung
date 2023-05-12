import './student.css';
import {Header, TimeBlocks, TimeData} from '@components/.';

const Student: React.FC = () => {
    return (
        <div className="student">
            <Header />
            <TimeBlocks />
            <TimeData data={[
                {date: "12.12.2022", course: "M165", timestamp: "12:30-13:30"},
                {date: "12.12.2022", course: "M166", timestamp: "12:30-13:30"}
            ]} />
        </div>
    )
}

export default Student;