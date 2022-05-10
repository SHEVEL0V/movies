import { Route, Routes } from "react-router-dom";
import HomePage from "./views/homeViews";
import Headers from "./views/headers";
import Movies from "./views/moviesCardFilm";
import SerchFilm from "./views/moviesSearch";

export default function App() {
  return (
    <div>
      <Headers />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies/" element={<SerchFilm />}></Route>
        <Route path="/movies/:id" element={<Movies />}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </div>
  );
}
