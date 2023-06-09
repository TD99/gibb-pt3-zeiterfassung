import "./blocks.css";
import { Link } from "react-router-dom";

interface ContainerProps {
  // @NotInplemented Add type
  data: any[];
}

const Blocks: React.FC<ContainerProps> = ({ data }) => {
  if (!data) {
    return <span>Keine Daten</span>;
  }

  return (
    <div className="blocks">
      {data.map((e) => {
        if (e.displayName) {
          return (
            <Link key={e.id} to={`./${e.id}`}>
              <div className="block-element" key={e.displayName}>
                {e.displayName}
              </div>
            </Link>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Blocks;
