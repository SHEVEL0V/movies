const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "?api_key=4fc86b17259ac63837b074fbab2b63b2";

export default async function fetchURL(request = "", config = {}) {
  const url = `${BASE_URL}${request}${KEY}`;

  const response = await fetch(url, config);
  return response.ok ? response.json() : Promise.reject(new Error("Not found"));
}
