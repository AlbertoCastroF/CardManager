import Layout from "./components/Layout";
import CardNew from "./pages/CardNew";
import Cards from "./pages/Cards";
import CardDetailsContainer from "./pages/CardDetailsContainer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import CardEdit from "./pages/CardEdit";

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cards" element={<Cards />} />
          <Route path="cards/new" element={<CardNew />} />
          <Route path="cards/:cardId/edit" element={<CardEdit />} />
          <Route path="cards/:cardId" element={<CardDetailsContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
