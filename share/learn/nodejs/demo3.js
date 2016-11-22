//https://github.com/mzabriskie/axios 的学习

var axios = require('axios');
//Performing a GET request

// Make a request for a user with a given ID
axios.get('http://192.168.1.120:8100//home/v1/ad/alertAd.json')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// // Optionally the request above could also be done as
// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });




