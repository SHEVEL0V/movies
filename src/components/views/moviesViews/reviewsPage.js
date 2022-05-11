import { useState, useEffect } from "react";
import s from "./stile.module.css";
import fetchUrl from "../../fetch/fetch";

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState();

  const path = `/movie/${id}/reviews`;

  useEffect(() => {
    fetchUrl(path).then(({ results }) => setReviews(results));
  }, []);

  return (
    <ul>
      {reviews ? (
        reviews.map((el) => (
          <li>
            <h3>{el.author}</h3>
            <p>{el.content}</p>
          </li>
        ))
      ) : (
        <h3>We don't haveany reviews for this movie.</h3>
      )}
    </ul>
  );
}
