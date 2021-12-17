import React from "react";
import PageLoading from "../components/PageLoading";
import Card from "../components/Card";
import CardForm from "../components/CardForm";
import logo from "../images/devconf.jpg";
import api from "../api";
import "./styles/CardEdit.css";
import { useNavigate, useParams } from "react-router-dom";

export default function CardEdit(props) {
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
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    setError(null);
    try {
      const data = await api.cards.read(param.cardId);
      setLoading(false);
      setData(data);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await api.cards.update(param.cardId, data);
      setLoading(false);
      nav("/cards");
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  return (
    <div className="cardEdit">
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
