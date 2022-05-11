import { Route, Routes } from "react-router-dom";
import HomePage from "./views/homeViews";
import Header from "./views/header/header";
import MovieDetailsPage from "./views/moviesViews/detailsPage";
import SerchFilm from "./views/moviesSearch";
import Container from "./container/container";

export default function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" end element={<HomePage />}></Route>
        <Route path="movies" element={<SerchFilm />}></Route>
        <Route path="movies/:movieId/*" element={<MovieDetailsPage />}></Route>
        <Route path="*" end element={<h1>404</h1>}></Route>
      </Routes>
    </Container>
  );
}
