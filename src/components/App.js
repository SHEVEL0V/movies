import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './header/header';
import Container from './container/container';

const HomePage = lazy(() => import('./views/home'));
const MovieDetailsPage = lazy(() => import('./views/detailsFilm'));
const SerchFilm = lazy(() => import('./views/searchFilm'));

export default function App() {
  return (
    <Container fallback={<h1>aaa</h1>}>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="movies/" element={<SerchFilm />}></Route>
          <Route
            path="movies/:movieId/*"
            element={<MovieDetailsPage />}
          ></Route>
          <Route path="*" element={<h1>404</h1>}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
