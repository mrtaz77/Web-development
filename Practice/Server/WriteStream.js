var http = require('http');
var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/RSA.txt','utf8')
var myWriteStream = fs.createWriteStream(__dirname + '/out.txt')

myReadStream.on('error', function(error) {
    console.log('Error occurred:');
    console.log(error);
});

myReadStream.on('data', function(chunk) {
    console.log('New chunk received');
    myWriteStream.write(chunk.toString());
});

