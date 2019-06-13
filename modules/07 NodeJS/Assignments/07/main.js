const express = require('express');
const fs = require('fs');
const zlib = require('zlib');
var cors = require('cors');


const app = express();
app.use(cors());


const { promisify } = require('util');
// SAME AS:
// const util = require('util');
// const promisify = util.promisify;

const zip = (source) => {
    return new Promise( (resolve, reject) => {
        try {
            fs.createReadStream(source) //read the stream
            .pipe(zlib.createGzip()) // zip the file
            .pipe(fs.createWriteStream(`backup/${source}.gz`)) // create the zip file
            .on('finish', () => ({message: 'File was zipped!!!'}));
        }
        catch(ex) {
            return new Error(ex);
        }
    } )
}

const init =  async () => {
    const fileName = 'Student.csv';
    try{
        // resolve
        const result = await zip(fileName);
        console.log(result.message);
    }
    catch(ex) {
        // reject
        console.error(ex);
    }
}

app.get('/', async (request, response) => {
    await init();
});

app.listen(8000, () => console.log("server is running in port 8000"));
