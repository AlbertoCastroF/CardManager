import logo from "../images/devconf.jpg";
import notfound from "../images/notfound.svg";
import { Link } from "react-router-dom";
import "./styles/NotFound.css";

export default function NotFound() {
  return (
    <div className="notfoundbody">
      <div className="notfoundbody__welcome">
        <img className="notfoundbody__welcome-img" src={logo} alt="logo" />
        <h1 className="notfoundbody__welcome-title">ERROR 404</h1>
        <h2>Address not found</h2>
        <Link className="btn btn-primary" to="/">
          Home
        </Link>
      </div>
      <img
        className="notfoundbody__img"
        src={notfound}
        alt="card ilustration"
      />
    </div>
  );
}
