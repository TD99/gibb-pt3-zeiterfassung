import "./timeBlockActivity.css";
import { FaBell } from "react-icons/fa";

interface ContainerProps {
  title: string;
  subtitle: string;
  background: string;
}

const TimeBlockActivity: React.FC<ContainerProps> = ({
  title,
  subtitle,
  background,
}) => {
  return (
    <div className="timeBlockActivity" style={{ backgroundColor: background }}>
      <FaBell size={80} color="white" />
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default TimeBlockActivity;
