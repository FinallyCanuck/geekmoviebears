require('dotenv').config();

let axios = require('axios');

module.exports = async function () {
  let url = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.TMDB_API_KEY}`;

  return axios
    .get(url)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
