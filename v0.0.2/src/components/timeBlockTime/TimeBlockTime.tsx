import './timeBlockTime.css';

interface ContainerProps {
    number: number;
    title: string;
    subtitle: string;
}

const TimeBlockTime: React.FC<ContainerProps> = ({ number, title, subtitle }) => {  
    return (
        <div className='timeBlockTime'>
            <div className='timeBlockTime-Time'>
                <h1>{number}</h1>
            </div>
            <div className='timeBlockTime-Title'>
                <h2>{title}</h2>
            </div>
            <div className='timeBlockTime-subtitle'>
                <p>{subtitle}</p>
            </div>
        </div>
    )
};

export default TimeBlockTime;