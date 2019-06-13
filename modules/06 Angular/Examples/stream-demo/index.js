const fs = require('fs');

// read file using 'fs' module
// console.time('stream experiment - readFile');
// fs.readFile('index.js', (error, data) => {
//     console.timeEnd('stream experiment - readFile');
//     console.log(data);
//  } );

const stream = fs.createReadStream('index.js');

console.time('stream experiment');
stream.on('data', (buffer) => {
    console.log(buffer);
}).on('end', () => {
    console.timeEnd('stream experiment');
    console.log('end');
});