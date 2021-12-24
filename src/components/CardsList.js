import React from "react";
import { Link } from "react-router-dom";

import Gravatar from "./Gravatar";

import "./styles/CardsList.css";

export default function CardsList(props) {
  // QUERY WILL SAVE THE CONTENT OF AN INPUT ELEMENT TO FILTER THE CARD LIST
  const [query, setQuery] = React.useState("");
  // FILTERED CARDS WILL CONTAIN THE CARDS FILTERED BY THE QUERY STATE
  const [filteredCards, setFilteredCards] = React.useState(props.cards);

  // I USE REACTMEMO TO PREVENT THE RECALLING OF A PREVIOUS SEARCH
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
          {/* IN CASE FILTEREDCARDS LENGTH IS 0 I MAKE SURE THE INPUT IS STILL SHOWN TO MAKE ANOTHER SEARCH THATS WHY ITS RENDERED IN BOTH CONDITIONS */}
          <div className="form-group">
            <label>Filter Badges</label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          {/* IF THERE IS NO CARDS IN FILTEREDCARDS WE INDICATE THAT THERE ARE NO CARDS */}
          <h3>Cards not found</h3>
          <Link className="btn btn-primary" to="new">
            Create new
          </Link>
        </>
      ) : (
        <div className="main">
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
                  {/* EACH CARD WILL BE A LINK TO THE CARDDETAILSCONTAINER WHERE YOU CAN SEE THE DETAILED INFORMATION OF EACH CARD */}
                  <Link className="list-unstyled" to={`/cards/${card.id}`}>
                    <CardsListItem card={card} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
//CARDSLISTITEM IS IN CHARGE TO SHOW THE CARD INFO FIRST AND LAST NAME, JOB AND TWITTER
function CardsListItem(props) {
  return (
    <div className="cardsListItem">
      {/* GRAVATAR COMPONENTS ONLY PORPOUSE IS TO SET THE AVATAR FOR EACH CARD I USE MD5 LIBRARY TO CREATE A DIFFERENT AVATAR EACH TIME*/}
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
