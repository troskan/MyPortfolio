import { NavLink } from "react-router-dom";
import "../css/Navbar/nav.css";

function Navbar() {
  return (
    <div className="nav-container">
      <nav>
        <NavLink to="/" activeclassname="active">
          About Me
        </NavLink>
        <NavLink to="/portfolio" activeclassname="active">
          Portfolio
        </NavLink>
        <NavLink to="/blog" activeclassname="active">
          Blog
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
