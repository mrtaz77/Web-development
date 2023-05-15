var fs = require('fs');
// fs.unlink('output.txt', (err) => {
//     if (err) console.log(err);
//     else {
//         console.log("\nDeleted file: output");
//     }
// });

fs.mkdirSync('newDir');

fs.mkdir('AsyncDir',function(){
    fs.readFile('input.txt', 'utf8', function(err,data){
        if (err) throw err;
        fs.writeFile('./AsyncDir/output.txt', data, function(err) {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
})

// setTimeout(function() {
//     console.log('5 seconds have passed')
// },5000)

// fs.rmdirSync('newDir');


// setTimeout(function() {
//     console.log('7 seconds have passed')
// },7000)

// fs.rmdir('newDir',(err)=> {
//     if (err) console.log(err);
//     else {
//         console.log("\nDeleted directory: newDir");
//     }
// });