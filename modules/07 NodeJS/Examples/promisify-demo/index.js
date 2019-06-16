const fs = require('fs');

const { promisify } = require('util');
// SAME AS:
// const util = require('util');
// const promisify = util.promisify;

const init = ( async () => {
    const promiseReadFile = promisify(fs.readFile);

    // Promise - promisify
    promiseReadFile('moshiko.txt', 'utf-8').then( fileContent => console.log("fileContent", fileContent) )

    // async-await - promisify
    const fileContent = await promiseReadFile('moshiko.txt', 'utf-8');
    console.log(fileContent);

    
})();