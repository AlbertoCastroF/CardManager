import { Link } from "react-router-dom";

import Card from "../components/Card";
import DeleteCardModal from "../components/DeleteCardModal";

import logo from "../images/devconf.jpg";

import "./styles/CardDetails.css";

export default function CardDetails(props) {
  const data = props.data;
  const param = props.param;
  return (
    <>
      {/* HERO RENDERING */}
      <div className="cardDetails__hero">
        <img src={logo} alt="logo" />
        <div className="cardDetails__hero-name">
          <h1>
            {data.firstName} {data.lastName}
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="container__compsDetails">
          <div>
            {/* CARD DATA IS RENDERED HERE FROM PROPS.DATA */}
            <Card
              firstName={data.firstName || "FIRST_NAME"}
              lastName={data.lastName || "LAST_NAME"}
              twitter={data.twitter || "twitter"}
              jobTitle={data.jobTitle || "JOB_TITLE"}
              email={data.email || "EMAIL"}
            />
          </div>
          <div>
            <h2>What do you want to do?</h2>
            <div>
              {/* THIS BUTTON SEND YOU TO /CARDS/ID/EDIT TO EDIT THE CARD DATA */}
              <Link
                className="btn btn-primary"
                to={`/cards/${param.cardId}/edit`}
              >
                Edit
              </Link>
            </div>
            <div>
              {/* THIS BUTTON OPEND A MODAL THAT ALLOW YOU TO DELETE THE CARD ENTIRELY */}
              <button onClick={props.onOpenModal} className="btn btn-danger">
                Delete
              </button>
              {/* MODAL TO DELETE CARD */}
              <DeleteCardModal
                onClose={props.onCloseModal}
                isOpen={props.modalIsOpen}
                onDeleteCard={props.onDeleteCard}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
