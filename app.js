var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hey!! You made a GET api call!');
});

app.post('/', function(req, res) {
	res.send('Hey!! You made a POST api call!');
});

app.put('/', function(req, res) {
	res.send('Hey!! You made a PUT api call!');
});

app.delete('/', function(req, res) {
	res.send('Hey!! You made a DELETE api call!');
});

app.listen(3000, function () {
	console.log('Hey!! Server started at port 3000!');
});
