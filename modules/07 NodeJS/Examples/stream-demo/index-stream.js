const fs = require('fs');

const stream = fs.createReadStream('group4-master.zip');

console.time('stream experiment');
stream.on('data', (buffer) => {
    // console.log(buffer);
}).on('close', () => {
    console.timeEnd('stream experiment');
    console.log('end');
});