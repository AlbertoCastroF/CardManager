import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageError from "../components/PageError";
import PageLoading from "../components/PageLoading";
import CardDetails from "./CardDetails";
import api from "../api";

export default function CardDetailsContainer() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const param = useParams();
  const nav = useNavigate();

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
      setError(error);
      setLoading(false);
    }
  }

  async function handleDeleteCard() {
    setLoading(true);
    setError(null);
    try {
      await api.cards.remove(param.cardId);
      setLoading(false);
      nav("/cards");
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
