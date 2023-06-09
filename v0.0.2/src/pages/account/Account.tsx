import "./account.css";
import { FaUserCircle } from "react-icons/fa";
import { AiTwotoneEdit } from "react-icons/ai";
const Account: React.FC = () => {
  return (
    <div className="account">
      <div className="accountImg">
        <h1>Account Details</h1>
        <FaUserCircle className="account-icon" />
      </div>

      <div className="account-informations">
        <h2>Max Mustermann</h2>
        <p>max.mustermann@gibb.ch</p>
        <p>Passwort</p>
      </div>

      <div className="account-edit">
        <AiTwotoneEdit className="accountEdit-icon" />
      </div>
    </div>
  );
};

export default Account;
