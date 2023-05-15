var http = require('http')
var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname+'/RSA.txt')

myReadStream.on('data',function (chunk) {
    console.log("New chunk received :\n"+chunk.toString())
    console.log(chunk)
})