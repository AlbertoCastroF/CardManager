import React from "react";
import "./styles/Cards.css";
import { Link } from "react-router-dom";
import api from "../api";
import CardsList from "../components/CardsList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

export default function Cards() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function () {
    setLoading(true);
    setError(null);
    try {
      const data = await api.cards.list();
      setLoading(false);
      setData(data);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return (
    <div>
      {error ? (
        <PageError error={error} />
      ) : (
        <>
          <div>
            {loading ? (
              <PageLoading />
            ) : (
              <>
                <div className="cards__container">
                  <div className="cards__buttons">
                    <Link className="btn btn-primary" to="/cards/new">
                      New Card
                    </Link>
                  </div>
                </div>

                <div className="cards__list">
                  <div className="cards__container">
                    <CardsList cards={data} />
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
