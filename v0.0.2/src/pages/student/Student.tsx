import "./student.css";
import { Header, TimeBlocks, TimeData } from "@components/.";

const Student: React.FC = () => {
  return (
    <div className="student">
      <Header name="Max" />
      <TimeBlocks />
      <br />
      <TimeData
        data={[
          { date: "12.12.2022", course: "M165", timestamp: "08:00-11:25" },
          { date: "12.12.2022", course: "M166", timestamp: "12:30-15:45" },
        ]}
      />
    </div>
  );
};

export default Student;
