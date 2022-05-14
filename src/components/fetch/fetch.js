const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '4fc86b17259ac63837b074fbab2b63b2';

export default async function fetchURL(path = '', option = '') {
  const url = `${BASE_URL}${path}?api_key=${KEY}${option}`;

  const response = await fetch(url);
  return response.ok ? response.json() : Promise.reject(new Error('Not found'));
}
