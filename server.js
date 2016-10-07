'use strict';

const express = require('express');
const app = express();
const request = require('request');

const PORT = process.env.PORT || 3000;
app.set('port', PORT);

// MIDDLEWARE (transform stream)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/*', (req, res) => {
	console.log("req.url: ", req.url);
	const coordinates = req.url;
	const weatherCallURL = `https://api.wunderground.com/api/f86d6fa04b4dd2cd/conditions/q${coordinates}.json`;
	request.get(weatherCallURL, (err, _, body) => {
    res.send(body);
  });
})

app.listen(PORT, () => {
	console.log(`Express server listening on port: ${PORT}`);
});
