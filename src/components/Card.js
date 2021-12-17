import confLogo from "../images/devconf.jpg";
import Gravatar from "./Gravatar";
import "./styles/Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card__header">
        <img
          className="card__header-image"
          src={confLogo}
          alt="conference logo"
        />
      </div>

      <div className="card__section-name">
        <Gravatar className="card__avatar" email={props.email} />
        <h1>
          {props.firstName}
          <br />
          {props.lastName}
        </h1>
      </div>

      <div className="card__section-info">
        <h2>{props.email}</h2>
        <h3>{props.jobTitle}</h3>
        <div>@{props.twitter}</div>
      </div>

      <div className="card__footer">#DevConf</div>
    </div>
  );
}
