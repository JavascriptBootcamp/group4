const fs = require('fs');

// read file using 'fs' module
console.time('stream experiment - readFile');
fs.readFile('group4-master.zip', (error, data) => {
    console.timeEnd('stream experiment - readFile');
    // console.log(data);
 } );