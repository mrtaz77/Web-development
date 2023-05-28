var http = require('http');
var fs = require('fs');



var server  = http.createServer(function(req,res){
    //response headers
    console.log("Request: " + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);   
    }
    else if(req.url === '/api/jacks'){
        var jack = [{name:'hornet',age:13},{name:'mclaren',age:15}];
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(jack));
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res); 
    }
})

server.listen(3222,'127.2.3.1')
console.log('Listening on to port 3222')