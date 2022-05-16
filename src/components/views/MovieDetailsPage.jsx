import { lazy, Suspense } from 'react';
import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Section from '../section/section';
import Loading from '../loading/loading';
import fetchUrl from '../fetch/fetch';
import s from './stile.module.css';

const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export default function MovieDetailsPage() {
  const [cardFilm, setCardFilm] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();

  const path = '/movie/' + movieId;
  const imgPath = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    fetchUrl(path).then(response => {
      setCardFilm(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { poster_path, title, vote_average, overview, genres } = cardFilm;

  return (
    <>
      <button className={s.button} type="button" onClick={() => navigate(-1)}>
        <FiArrowLeft />
        Go back
      </button>
      <div className={s.card}>
        <img src={imgPath + poster_path} className={s.img} alt=" "></img>
        <div>
          <h2>{title}</h2>
          <p>Users score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres && genres.map(el => <span key={el.id}>{el.name} </span>)}
          </p>
        </div>
      </div>
      <Section>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews </NavLink>
          </li>
        </ul>
      </Section>
      <Section>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="cast"
              element={<Cast id={movieId} imgPath={imgPath} />}
            ></Route>
            <Route path="reviews" element={<Reviews id={movieId} />}></Route>
          </Routes>
        </Suspense>
      </Section>
    </>
  );
}
