require('dotenv').config();

const fetch = require('node-fetch');

module.exports = async function () {
  let res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=en-GB&region=GB`
  );
  let films = await res.json();
  console.log(films.results);
  return films.results;
};
