import { Route, Routes } from "react-router-dom";
import HomePage from "./views/homeViews";
import Header from "./views/header/header";
import CardInfoFilm from "./views/cardInfoFilm";
import SerchFilm from "./views/moviesSearch";
import Container from "./container/container";

export default function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies/" element={<SerchFilm />}></Route>
        <Route path="/movies/:id" element={<CardInfoFilm />}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </Container>
  );
}
