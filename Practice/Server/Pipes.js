var http = require('http');
var fs = require('fs');



var server  = http.createServer(function(req,res){
    //response headers
    console.log("Request: " + req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/RSA.txt','utf8')
    myReadStream.pipe(res);
})

server.listen(3222,'127.2.3.1')
console.log('Listening on to port 3222')