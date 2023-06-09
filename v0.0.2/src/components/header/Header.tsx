import "./header.css";

interface ContainerProps {
  name?: string;
}

const Header: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="header">
      <div className="header-title">
        <h1>Guten Tag{name && ", " + name}</h1>
      </div>
    </div>
  );
};

export default Header;
