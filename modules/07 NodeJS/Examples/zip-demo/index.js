const fs = require('fs');
const zlib = require('zlib');

const { promisify } = require('util');
// SAME AS:
// const util = require('util');
// const promisify = util.promisify;

const zip = (source) => {
    return new Promise( (resolve, reject) => {
        try{
            fs.createReadStream(source) //read the stream
            .pipe(zlib.createGzip()) // zip the file
            .pipe(fs.createWriteStream(`${source}.gz`)) // create the zip file
            .on('finish', () => ({message: 'File was zipped!!!'}));
        }
        catch(ex) {
            return new Error(ex);
        }
    } )
}

const init = ( async () => {
    const fileName = 'moshiko.txt';
    try{
        // resolve
        const result = await zip(fileName);
        console.log(result.message);
    }
    catch(ex) {
        // reject
        console.error(ex);
    }
})();