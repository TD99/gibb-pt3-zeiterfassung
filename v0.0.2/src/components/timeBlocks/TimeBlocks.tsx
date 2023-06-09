import "./timeBlocks.css";
import {
  TimeBlockModul,
  TimeBlockActivity,
  TimeBlockTime,
} from "@components/.";
// Green    Red       Blue
const colors = ["#378D60", "#8D3737", "#328098"];

const TimeBlocks: React.FC = () => {
  return (
    <div className="timeBlocks">
      <TimeBlockActivity
        title="Pause"
        subtitle="Jetzt"
        background={colors[2]}
      />
      <TimeBlockTime number={10} title="Minuten übrig" subtitle="12:45-13:15" />
      <TimeBlockModul title="M254" subtitle="Kurt Järmann" />
    </div>
  );
};

export default TimeBlocks;
