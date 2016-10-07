'use strict'

const express = require('express')
const app = express();
const request = require('request'); //from vaughn's proxy

const PORT = process.env.PORT || 3000
app.set('port', PORT)

// MIDDLEWARE (transform stream)
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.use(express.static('public'));

app.get('/*', (req, res) => {
	console.log("req.url: ", req.url);
	const coordinates = req.url;
	const weatherCallURL = `http://api.wunderground.com/api/f86d6fa04b4dd2cd/conditions/q${coordinates}.json`
	request.get(weatherCallURL, (err, _, body) => {
    console.log("body: ", body);
    // res.send(body)
  });
})


// WEATHERUNDERGROUND PROXY
// app.get('/*', (req, res) => {
// 	console.log("req.url: ", req.url);
	//.get(`https://trailweatherproxy.herokuapp.com/${req.url}`)


// GOOGLE MAPS PROXY (from Vaughn)
// app.get('/maps/*', (req, res) => {
//   let newMapsURL = req.url
//   newMapsURL = `https://maps.googleapis.com${newMapsURL}`
//   request.get(newMapsURL, (err, _, body) => {
//     res.send(body)
//   });
// });


// })

app.listen(PORT, () => {
	console.log(`Express server listening on port: ${PORT}`);
});


// ORIGINAL CALL FROM FACTORY
// function getCurrentWeather(lat, long){
// 	return new Promise(function(resolve, reject){
// 		$.ajax({
// 			url: `http://api.wunderground.com/api/f86d6fa04b4dd2cd/conditions/q/${lat},${long}.json`
// 		}).done(function(data){
// 			resolve(data);
// 		});
// 	});
// }
