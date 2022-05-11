import fetchUrl from "../fetch/fetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const options = "/trending/movie/week";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchUrl(options).then((response) => {
      const { results } = response;
      setMovies(results);
    });
  }, []);

  return (
    <ul>
      {movies.map((el) => (
        <li key={el.id}>
          <Link to={`movies/${el.id}`}>{el.title}</Link>
        </li>
      ))}
    </ul>
  );
}
