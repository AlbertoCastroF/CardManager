import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import PageLoading from "../components/PageLoading";
import Card from "../components/Card";
import CardForm from "../components/CardForm";

import logo from "../images/devconf.jpg";

import "./styles/CardEdit.css";

export default function CardEdit(props) {
  // DATA THAT WILL BE SEND TO THE MOCKAPI API TO UPDATE A CARDS INFORMATION
  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: "",
    avatarUrl: "",
  });
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const nav = useNavigate();
  const param = useParams();

  React.useEffect(() => {
    (async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        // GETTING THE INFO OF CURRENT CARD
        const res = await fetch(
          `https://61be39382a1dd4001708a291.mockapi.io/data/cards/${param.cardId}`
        );
        const data = await res.json();
        setLoading(false);
        setData(data);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    })();
  }, [param.cardId]);

  // FUNCTION THAT WILL UPDATE THE DATA FROM THE FORM
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // UPDATING THE CURRENT CARD WITH NEW DATA
      await fetch(
        `https://61be39382a1dd4001708a291.mockapi.io/data/cards/${param.cardId}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      setLoading(false);
      nav("/CardManager/cards");
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  return (
    <div className="cardEdit">
      {/* BODY OF THE COMPONENT WILL SHOW UNTIL LOADING IS FALSE */}
      {loading ? (
        <PageLoading />
      ) : (
        <>
          <div className="cardEdit__hero">
            <img src={logo} alt="logo" />
          </div>
          <div className="container">
            <div className="container__compsEdit">
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
                <h1>Edit Attendant</h1>
                <CardForm
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  error={error}
                  data={data}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
