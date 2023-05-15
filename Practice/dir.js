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


// fs.rmdirSync('newDir');

// fs.rmdir('newDir',(err)=> {
//     if (err) console.log(err);
//     else {
//         console.log("\nDeleted directory: newDir");
//     }
// });

// fs.unlink('./AsyncDir/output.txt', (err)=>{
//     if(err)console.log(err);
//     fs.rmdir('AsyncDir',(err)=>{
//         if(err)console.log(err);
//         console.log("\nDeleted directory:AsyncDir")
//     })
// })