import React from "react";
import PageLoading from "../components/PageLoading";
import Card from "../components/Card";
import CardForm from "../components/CardForm";
import logo from "../images/devconf.jpg";
import api from "../api";
import "./styles/CardNew.css";
import { useNavigate } from "react-router-dom";

export default function CardNew(props) {
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
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await api.cards.create(data);
      setLoading(false);
      nav("/cards");
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  return (
    <div className="cardNew">
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
                <Card
                  firstName={data.firstName || "FIRST_NAME"}
                  lastName={data.lastName || "LAST_NAME"}
                  twitter={data.twitter || "twitter"}
                  jobTitle={data.jobTitle || "JOB_TITLE"}
                  email={data.email || "EMAIL"}
                  // avatarURL="https://gravatar.com/avatar?d=identicon"
                />
              </div>
              <div>
                <h1>New Attendant</h1>
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
