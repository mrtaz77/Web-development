var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Hello World');
})

app.get('/contact', function(req, res){
    res.send('Contact');
})

app.get('/profile/:id', function(req, res){
    res.send('Request id :'+req.params.name)
})
// can also use req.params.id for same effect

app.listen(3002);


