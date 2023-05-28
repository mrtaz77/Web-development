var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Hello World');
})

app.get('/contact', function(req, res){
    res.send('Contact');
})

app.listen(3002);


