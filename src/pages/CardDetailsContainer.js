import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import PageError from "../components/PageError";
import PageLoading from "../components/PageLoading";
import CardDetails from "./CardDetails";

export default function CardDetailsContainer() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  // FROM THIS COMPONENT I WILL SEND MODALISOPEN STATE TO THE DELETECARDMODAL COMPONENT
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const param = useParams();
  const nav = useNavigate();

  // fetchData();
  React.useEffect(() => {
    (async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        // TO SEE THE DETAILS OF A CARD I MAKE AN API CALL TO BRING ONLY THE CARDS INFORMATION I NEED WITH THE HELP OF USEPARAMS
        const res = await fetch(
          `https://61be39382a1dd4001708a291.mockapi.io/data/cards/${param.cardId}`
        );
        const data = await res.json();
        setLoading(false);
        setData(data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [param.cardId]);

  async function handleDeleteCard() {
    setLoading(true);
    setError(null);
    try {
      await fetch(
        `https://61be39382a1dd4001708a291.mockapi.io/data/cards/${param.cardId}`,
        {
          method: "DELETE",
        }
      );
      setLoading(false);
      // IF USER PRESSES THE DELETE BUTTON CARD IS DELETED AND WE ARE REDIRECTED TO /CARDMANAGER/CARDS
      nav("/CardManager/cards");
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  function handleOpenModal(e) {
    setModalIsOpen(true);
  }
  function handleCloseModal(e) {
    setModalIsOpen(false);
  }

  return (
    <>
      {/* IF THERE NO ERROR AND LOADING IS FALSE I SHOW CARDDETAILS */}
      {error ? (
        <PageError error={error} />
      ) : loading ? (
        <PageLoading />
      ) : (
        <CardDetails
          param={param}
          data={data}
          onCloseModal={handleCloseModal}
          onOpenModal={handleOpenModal}
          modalIsOpen={modalIsOpen}
          onDeleteCard={handleDeleteCard}
        />
      )}
    </>
  );
}
