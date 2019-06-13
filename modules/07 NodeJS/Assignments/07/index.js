const fs = require('fs');
const express = require('express');
const app = express()
const port = 8000
const zlib = require('zlib');
const { promisify } = require('util');
const path = require('path').basename(__dirname);

app.get('/', async (req, res) => {
    const source = "students.csv";
    const promiseZip = promisify(zip);
    try {
        const result = await promiseZip(source);
        res.send(result.message);
    }
    catch (e) {
        res.send(e);
    }

})
app.listen(port)

const zip = (source, callback) => {
    try {
        fs.createReadStream(source) //read the stream
            .pipe(zlib.createGzip()) // zip the file
            .pipe(fs.createWriteStream(`backup/${source}.gz`)) // create the zip file
            .on('finish', () => callback(null, { message: 'File was zipped!!!' }));
    }
    catch (ex) {
        return callback(ex);
    }
}