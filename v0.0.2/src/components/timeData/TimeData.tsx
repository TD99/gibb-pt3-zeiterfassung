import "./timeData.css";

interface TimeObj {
  // @NotImplemented Add date type
  date: string;
  course: string;
  timestamp: string;
}

interface ContainerProps {
  data: TimeObj[];
}

const TimeData: React.FC<ContainerProps> = ({ data }) => {
  return (
    <div className="timedata">
      <table className="mainRow">
        <thead>
          <tr>
            <th>
              <b>Datum</b>
            </th>
            <th>
              <b>Kurs</b>
            </th>
            <th>
              <b>Zeiterfassung</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e.course}>
              <td>{e.date}</td>
              <td>{e.course}</td>
              <td>{e.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeData;
