import React from "react";
import { Link } from "react-router-dom";
import "./styles/CardsList.css";
import Gravatar from "./Gravatar";

export default function CardsList(props) {
  const [query, setQuery] = React.useState("");
  const [filteredCards, setFilteredCards] = React.useState(props.cards);

  React.useMemo(() => {
    const result = props.cards.filter((card) =>
      card.firstName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCards(result);
  }, [props.cards, query]);

  return (
    <div className="cardsList">
      {filteredCards.length === 0 ? (
        <>
          <div className="form-group">
            <label>Filter Badges</label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <h3>Cards not found</h3>
          <Link className="btn btn-primary" to="new">
            Create new
          </Link>
        </>
      ) : (
        <>
          <div className="form-group">
            <label>Filter Badges</label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <ul className="list-unstyled">
            {filteredCards.map((card) => {
              return (
                <li key={card.id}>
                  <Link className="list-unstyled" to={`/cards/${card.id}`}>
                    <CardsListItem card={card} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

function CardsListItem(props) {
  return (
    <div className="cardsListItem">
      <Gravatar className="cardsListItem__avatar" email={props.card.email} />

      <div className="cardsListItem__main">
        <p>
          <strong>
            {props.card.firstName} {props.card.lastName}
          </strong>
        </p>
        <p className="twitter">🐦@{props.card.twitter}</p>
        <p>{props.card.jobTitle}</p>
      </div>
    </div>
  );
}
