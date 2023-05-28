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

app.get('/profile/:name', function(req, res){
    var data = {age:29,job:'hacker',hobbies:['books','anime']}

    res.render('profile',{person:req.params.name,data:data})
})

// can also use req.params.id for same effect

app.listen(3002);


