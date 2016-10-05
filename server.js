'use strict'

const express = require('express')
const app = express();

const PORT = process.env.PORT || 6660
app.set('port', PORT)

// MIDDLEWARE (transform stream)
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// WEATHERUNDERGROUND PROXY
app.get('/t/*', (req, res) => {
	console.log("req.body: ", req.body);
  // let newURL = `${req.url}`.replace(/%22/g, '"');
  // newURL = newURL.replace(/%20/g, ' ');
  // factual.get(newURL, function (error, data) {
  // res.send(data);
  // });

})

app.listen(PORT, () => {
	console.log(`Express server listening on port: ${PORT}`);
});


//ORIGINAL CALL FROM FACTORY
// function getCurrentWeather(lat, long){
// 		return new Promise(function(resolve, reject){
// 			$.ajax({
// 				url: `http://api.wunderground.com/api/f86d6fa04b4dd2cd/conditions/q/${lat},${long}.json`
// 			}).done(function(data){
// 				resolve(data);
// 			});
// 		});
// 	}
