import { NavLink } from "react-router-dom";

export default function Headers() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies/">Movies</NavLink>
    </div>
  );
}
