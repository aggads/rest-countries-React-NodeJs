const express = require('express');
const router = express.Router();
var request = require('request');

const externalUrl = 'https://restcountries.eu/rest/v2';

// router.get('/', (_, res) =>{
//   res.send('app running')
// });

router.get('/all', (req, res, next) => {
  request({
    uri: externalUrl
  }).pipe(res);
});

// https://restcountries.eu/rest/v2/name/aruba?fullText=true


router.param(['fullText'], (req, res, next, value) =>{
  console.log('CALLED ONLY ONCE with', value)
  next()
})

router.get('/name/:countryName', (req, res, next) =>{
  request({
    uri: externalUrl
  }).pipe(res)
});
  
  module.exports = router ;
