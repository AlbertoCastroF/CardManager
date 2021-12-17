import { Link } from "react-router-dom";

import logo from "../images/devconf.jpg";

import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/CardManager" className="navbar__brand" href="/">
        <img className="navbar__brand-logo" src={logo} alt="Logo" />
        <span>Dev</span>
        <span>
          <strong>Conf</strong>
        </span>
      </Link>
    </div>
  );
}
