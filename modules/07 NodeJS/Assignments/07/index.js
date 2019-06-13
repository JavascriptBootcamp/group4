const express = require('express');
const path = require('path');
const app = express();

const fs = require('fs');
const zlib = require('zlib');

const fileName = "students.csv";

const zip = (source) => {
    return new Promise( (resolve, reject) => {
        try{
            fs.createReadStream(source) //read the stream
            .pipe(zlib.createGzip()) // zip the file
            .pipe(fs.createWriteStream(path.join(`backup`,`${source}.gz`))) // create the zip file
            .on('finish', () => ({message: 'File was zipped!!!'}));
        }
        catch(ex) {
            return new Error(ex);
        }
    })
}

app.get('/',(request,response)=>{
    zip(fileName);
});

app.listen(4000, () => console.log('listening on port 4000'));