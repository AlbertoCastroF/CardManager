import React from "react";
import { Link } from "react-router-dom";

import CardsList from "../components/CardsList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import "./styles/Cards.css";

export default function Cards() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetchData();
  }, []);

  // FETCHING DATA FROM THE API MOCKAPI.IO TO RENDER THE CURRENT CARDS
  const fetchData = async function () {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://61be39382a1dd4001708a291.mockapi.io/data/cards"
      );
      const data = await res.json();
      setLoading(false);
      setData(data);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return (
    <div>
      {/* IF THERES AN ERROR I SHOW THE PAGEERROR COMPONENT IF NOT, I SHOW THE LOADING THEN THE BODY OF THE COMPONENT */}
      {error ? (
        <PageError error={error} />
      ) : (
        <>
          <div>
            {loading ? (
              <PageLoading />
            ) : (
              <div className="cards">
                <div className="cards__container">
                  <div className="cards__buttons">
                    {/* THIS BUTTON TAKES US TO THE CARDNEW COMPONENT WHERE WE CAN POST A NEW CARD TO THE API */}
                    <Link className="btn btn-primary" to="/cards/new">
                      New Card
                    </Link>
                  </div>
                </div>

                <div className="cards__list">
                  <div className="cards__container">
                    {/* CARDSLIST IS IN CHARGE OR RENDERING THE CARDS */}
                    <CardsList cards={data} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
