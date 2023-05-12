import './timeData.css';

interface TimeObj {
    // @NotImplemented Add date type
    date: string;
    course: string;
    timestamp: string
}

interface ContainerProps {
    data: TimeObj[];
}

const TimeData: React.FC<ContainerProps> = ({ data }) => {  
    return (
        <div className='timedata'>
            <table className='mainRow'>
                <tbody>
                    <tr>
                        <th><h3>Datum</h3></th>
                        <th><h3>Kurs</h3></th>
                        <th><h3>Zeiterfassung</h3></th>
                    </tr>

                    
                    {
                        data.map((e) => (
                            <tr key={e.course}>
                                <td>
                                    {e.date}
                                </td>
                                <td>
                                    {e.course}
                                </td>
                                <td>
                                    {e.timestamp}
                                </td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </div>
        
    )
}

export default TimeData;