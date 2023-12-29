import { NavLink } from "react-router-dom";
import "../css/Navbar/nav.css";

function Navbar() {
  return (
    <>
      <div className="nav-container">
        {/* <h1 className="alvin">Alvin Strandberg</h1> */}
        <nav>
          <NavLink to="/" activeclassname="active">
            About Me
          </NavLink>
          {/* <NavLink to="/portfolio" activeclassname="active">
          Portfolio
        </NavLink> */}
          <NavLink to="/blog" activeclassname="active">
            Blog
          </NavLink>
        </nav>
      </div>

      <a href="https://blog-react-ts.vercel.app/">Try the new blog (Alpha)</a>
    </>
  );
}

export default Navbar;
