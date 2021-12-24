import { Link } from "react-router-dom";

import card from "../images/homeimg.svg";
import logo from "../images/devconf.jpg";

import "./styles/Home.css";

export default function Home() {
  return (
    <div className="homebody">
      <div className="homebody__welcome">
        <img className="homebody__welcome-img" src={logo} alt="logo" />
        <h1 className="homebody__welcome-title">Create Your Cards</h1>
        <h2>The easiest way to manage your conferenceeeeee</h2>
        <Link className="btn btn-primary" to="cards">
          Start
        </Link>
      </div>
      <img className="homebody__img" src={card} alt="card ilustration" />
    </div>
  );
}
