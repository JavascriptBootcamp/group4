const fs = require('fs');
const zlib = require('zlib');

const { promisify } = require('util');
// SAME AS:
// const util = require('util');
// const promisify = util.promisify;

const zip = (source, callback) => {
    try{
        fs.createReadStream(source) //read the stream
        .pipe(zlib.createGzip()) // zip the file
        .pipe(fs.createWriteStream(`${source}.gz`)) // create the zip file
        .on('finish', () => callback(null, {message: 'File was zipped!!!'}));
    }
    catch(ex) {
        return callback(ex);
    }
}

const init = ( async () => {
    const fileName = 'moshiko.txt';
    try{
        // resolve
        const promiseZip = promisify(zip);
        const result = await promiseZip(fileName);
        // let promiseResult = null;
        // promiseZip(fileName).then( result => promiseResult = result );
        console.log('Result', result.message);
    }
    catch(ex) {
        // reject
        console.error('Error', ex);
    }
})();