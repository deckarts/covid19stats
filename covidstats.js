// Requires a Node environment
// Plus Axios https://github.com/axios/axios
'use strict'

const axios = require('axios');

// Get request json response data from source
function getUS() { return axios.get('https://covidtracking.com/api/us'); }

axios.all([getUS()])
    .then(axios.spread(function (usa) {
        console.log(
            '\nUnited States\nTested: ' + usa['data'][0]['posNeg']
            + '\nPositive: '     + usa['data'][0]['positive']
            + '\nNegative: '     + usa['data'][0]['negative']
            + '\nHospitalized: ' + usa['data'][0]['hospitalized']
            + '\nDeaths: '       + usa['data'][0]['death']);
    }));
