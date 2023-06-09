import "./timeBlockTime.css";

interface ContainerProps {
  number: number;
  title: string;
  subtitle: string;
}

const TimeBlockTime: React.FC<ContainerProps> = ({
  number,
  title,
  subtitle,
}) => {
  return (
    <div className="timeBlockTime">
      <h1>{number}</h1>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default TimeBlockTime;
