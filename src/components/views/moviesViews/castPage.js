import { useState, useEffect } from "react";
import s from "./stile.module.css";
import fetchUrl from "../../fetch/fetch";

export default function Cast({ id, imgPath }) {
  const [cast, setCast] = useState();

  const path = `/movie/${id}/credits`;

  useEffect(() => {
    fetchUrl(path).then(({ cast }) => setCast(cast));
  }, []);

  return (
    <ul>
      {cast &&
        cast.map((el) => (
          <li key={el.id} className={s.cards}>
            {el.profile_path && (
              <img
                className={s.imgCast}
                src={imgPath + el.profile_path}
                alt="foto "
              ></img>
            )}
            <h3>{el.name}</h3>
          </li>
        ))}
    </ul>
  );
}
