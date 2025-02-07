import { Link } from "react-router-dom";
import icons from "../../styles/icons";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img className="icon" src={icons.home} alt="" />
      </Link>
      <Link to="/despesa/add">
        <img className="icon" src={icons.add} alt="" />
      </Link>
      <Link to="#">
        <img className="icon" src={icons.config} alt="" />
      </Link>
      <Link to="#">
        <img className="icon" src={icons.logout} alt="" />
      </Link>
    </div>
  );
};

export default Sidebar;
