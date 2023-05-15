var http = require('http');

var server  = http.createServer(function(req,res){
    //response headers
    console.log("Request: " + req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Text for testing!!!')
})

server.listen(3222,'127.0.0.1')
console.log('Listening on to port 3222')
