import { useState, useEffect } from "react";
import fetchUrl from "../../fetch/fetch";
import { useParams, NavLink, Routes, Route } from "react-router-dom";
import s from "./stile.module.css";
import Cast from "./castPage";
import Reviews from "./reviewsPage.js";

export default function MovieDetailsPage() {
  const [cardFilm, setCardFilm] = useState({});
  const { movieId } = useParams();

  const path = "/movie/" + movieId;
  const imgPath = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    fetchUrl(path).then((response) => {
      setCardFilm(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={s.card}>
        <img
          src={imgPath + cardFilm.poster_path}
          className={s.img}
          alt=" "
        ></img>
        <div>
          <h2>{cardFilm.title}</h2>
          <p>Users score: {cardFilm.vote_average}</p>
          <h3>Overview</h3>
          <p>{cardFilm.overview}</p>
          <h3>Genres</h3>
          <p>
            {cardFilm.genres &&
              cardFilm.genres.map((el) => <span key={el.id}>{el.name} </span>)}
          </p>
        </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews </NavLink>
          </li>
        </ul>

        <Routes>
          <Route
            path="cast"
            element={<Cast id={movieId} imgPath={imgPath} />}
          ></Route>
          <Route path="reviews" element={<Reviews id={movieId} />}></Route>
        </Routes>
      </div>
    </>
  );
}
