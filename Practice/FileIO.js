var fs = require('fs')

var readMe = fs.readFileSync('input.txt','utf-8')
fs.writeFileSync('output.txt',readMe)

fs.readFile('input.txt', 'utf8', function(err, data) {
    if (err) throw err;

    fs.writeFile('output2.txt', data, function(err) {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});

