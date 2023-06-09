import "./admin.css";
import { Header, Blocks } from "../../components";

const Admin: React.FC = () => {
  const data = [
    {
      displayName: "Oliver Schramm",
      id: 0,
    },
    {
      displayName: "Yilmaz Günel",
      id: 1,
    },
    {
      displayName: "Miriam Schluep",
      id: 2,
    },
  ];
  return (
    <div className="admin">
      <Header />
      <Blocks data={data} />
    </div>
  );
};

export default Admin;
