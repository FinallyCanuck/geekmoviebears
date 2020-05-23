require('dotenv').config();

let axios = require('axios');

module.exports = async function () {
  let url =
    'https://api.themoviedb.org/3/movie/550?api_key=d03c76743df807c4f722519c49d129a7';

  return axios
    .get(url)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
