require('dotenv').config();

let axios = require('axios');

module.exports = async function () {
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-GB&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

  return axios
    .get(url)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
