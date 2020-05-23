require('dotenv').config();

const fetch = require('node-fetch');

module.exports = async function () {
  let res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-GB&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  );
  let films = await res.json();
  return films.results;
};
