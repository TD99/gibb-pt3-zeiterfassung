import "./timeBlockModul.css";
import { FaSchool } from "react-icons/fa";

interface ContainerProps {
  title: string;
  subtitle: string;
}

const TimeBlockModul: React.FC<ContainerProps> = ({ title, subtitle }) => {
  return (
    <div className="timeBlockModul">
      <FaSchool color="#DDDEE3" size={80} />
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default TimeBlockModul;
