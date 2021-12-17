import Card from "../components/Card";
import { Link } from "react-router-dom";
import logo from "../images/devconf.jpg";
import DeleteCardModal from "../components/DeleteCardModal";
import "./styles/CardDetails.css";

export default function CardDetails(props) {
  const data = props.data;
  const param = props.param;
  return (
    <>
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
              <Link
                className="btn btn-primary"
                to={`/cards/${param.cardId}/edit`}
              >
                Edit
              </Link>
            </div>
            <div>
              <button onClick={props.onOpenModal} className="btn btn-danger">
                Delete
              </button>
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
