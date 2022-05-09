import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./views/homeViews";
import Headers from "./views/headers";

export default function App() {
  return (
    <div>
      <Headers />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<h1>aaaa</h1>}></Route>
      </Routes>
    </div>
  );
}
