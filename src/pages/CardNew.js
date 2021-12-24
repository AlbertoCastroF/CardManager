import React from "react";
import { useNavigate } from "react-router-dom";

import PageLoading from "../components/PageLoading";
import Card from "../components/Card";
import CardForm from "../components/CardForm";

import logo from "../images/devconf.jpg";

import "./styles/CardNew.css";

export default function CardNew() {
  // DATA WILL CONTAIN ALL OF THE FORM INFORMATION THEN SEND IT TO THE API
  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: "",
    avatarUrl: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const nav = useNavigate();

  function handleChange(e) {
    // HERE I SET THE DATA ACCORDING TO THE NAME AND VALUE FROM EACH IMPUT
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // POSTING NEW CARD
      await fetch("https://61be39382a1dd4001708a291.mockapi.io/data/cards", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setLoading(false);
      // ONCE YOU POST A CARD YOU WILL BE REDIRECTED TO THE CARDS COMPONENT
      nav("/CardManager/cards");
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  return (
    <div className="cardNew">
      {/*WHILE LOAD IS TRUE I SHOW THE PAGELOADING COMPONENT */}
      {loading ? (
        <PageLoading />
      ) : (
        <>
          <div className="cardNew__hero">
            <img src={logo} alt="logo" />
          </div>
          <div className="container">
            <div className="container__compsNew">
              <div>
                {/* CARD SHOWS THE UPDATED INFORMATION IN REAL TIME AS IT IS SUBMITTED IN THE FORM BELOS */}
                <Card
                  firstName={data.firstName || "FIRST_NAME"}
                  lastName={data.lastName || "LAST_NAME"}
                  twitter={data.twitter || "twitter"}
                  jobTitle={data.jobTitle || "JOB_TITLE"}
                  email={data.email || "EMAIL"}
                />
              </div>
              <div>
                <h1>New Attendant</h1>
                {/* CARDFORM UPDATES THE DATA FROM THE INFORMATION ENTERED IN THE INPUT ELEMENTS */}
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
