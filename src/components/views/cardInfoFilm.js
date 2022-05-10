import { useState, useEffect } from "react";
import fetchUrl from "../fetch/fetch";
import { useParams } from "react-router-dom";

export default function Movies() {
  const [cardFilm, setCardFilm] = useState({});
  const { id } = useParams();

  const option = "/movie/" + id;

  useEffect(() => {
    fetchUrl(option).then((response) => {
      setCardFilm(response);
      console.log(response);
    });
  }, []);

  return (
    <>
      <h2>{cardFilm.title}</h2>
      <h3>Overview</h3>
      <p>{cardFilm.overview}</p>
      <h3>Genres</h3>
      <p>
        {cardFilm.genres &&
          cardFilm.genres.map((el) => <span key={el.id}>{el.name} </span>)}
      </p>
    </>
  );
}
