import { Link } from "react-router-dom";
import fetchUrl from "../fetch/fetch";
import { useState, useEffect } from "react";

const trendingMovies = "trending/movie/week";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchUrl(trendingMovies).then((response) => {
      const { results } = response;
      console.log(results);
      setMovies(results);
    });
  }, []);

  return (
    <ul>
      {movies.map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
}
