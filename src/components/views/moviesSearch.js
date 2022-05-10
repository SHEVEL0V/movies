import fetchURL from "../fetch/fetch";
import { useEffect, useState } from "react";
import { Link, useRout } from "react-router-dom";

export default function SerchFilm() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const search = `&language=en-US&query=${value}&page=1&include_adult=true`;
  const options = "/search/movie";

  useEffect(() => {
    if (value) {
      fetchURL(options, search).then((response) => setList(response.results));
    }
  }, [value]);

  const onRender = (e) => {
    e.preventDefault();
    const { value } = e.target.input;
    setValue(value);
  };

  return (
    <div>
      <form onSubmit={onRender}>
        <input name="input"></input>
        <button type="sabmit">search</button>
      </form>
      <ul>
        {list.map((el) => (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
