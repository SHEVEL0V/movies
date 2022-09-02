import { lazy, Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  useParams,
  NavLink,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Section from '../../components/section/section';
import Loading from '../../components/loading/loading';
import { fetchFilmById } from '../../services/fetch';
import Button from '@mui/material/Button';
import logo from '../../img/images.png';
import s from './style.module.css';

const Cast = lazy(() => import('../cast'));
const Reviews = lazy(() => import('../reviews'));

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const imgPath = 'https://image.tmdb.org/t/p/w500/';

  const navigate = useNavigate();

  const { data = {}, isLoading } = useQuery(['fechTrend'], () =>
    fetchFilmById(movieId)
  );

  const { poster_path, title, vote_average, overview, genres } = data;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Button variant="contained" onClick={() => navigate(-1)}>
            <FiArrowLeft />
            Go back
          </Button>
          <Section>
            <div className={s.card}>
              <img
                className={s.img}
                src={poster_path ? imgPath + poster_path : logo}
                alt="baner "
              ></img>
              <div>
                <h2>{title}</h2>
                <p>Users score: {vote_average}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>
                  {genres &&
                    genres.map(el => <span key={el.id}>{el.name} </span>)}
                </p>
              </div>
            </div>
          </Section>

          <Section>
            <h2 className={s.title}>Additional information</h2>
            <div className={s.container}>
              <NavLink
                className={s.naw}
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: 'rgba(30, 45, 123, 0.244)' }
                    : {}
                }
                to="cast"
              >
                <Button variant="outlined">Cast</Button>
              </NavLink>
              <NavLink
                className={s.naw}
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: 'rgba(30, 45, 123, 0.244)' }
                    : {}
                }
                to="reviews"
              >
                <Button variant="outlined">Reviews</Button>
              </NavLink>
            </div>
          </Section>
          <Section>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="cast" element={<Cast id={movieId} />}></Route>
                <Route
                  path="reviews"
                  element={<Reviews id={movieId} />}
                ></Route>
              </Routes>
            </Suspense>
          </Section>
        </div>
      )}
    </>
  );
}
