const express = require('express');
const fs = require('fs');
const zlib = require('zlib');
const { promisify } = require('util');
const path = require('path');

const app = express();

app.use(express.json()); // Middleware - for reading the BODY

const parties = [];

// Read
app.get('/', (request, response) => {
    const folder = request.query.folder;
    init(folder);
    responseJson(response, "ok");
});


function responseJson(response, result) {
    response.json({
        result
    });
}



// SAME AS:
// const util = require('util');
// const promisify = util.promisify;

const zip = (source,folder) => {
    return new Promise( (resolve, reject) => {
        try{
            fs.createReadStream(source) //read the stream
            .pipe(zlib.createGzip()) // zip the file
            .pipe(fs.createWriteStream(path.join(folder, `${source}.gz`))) // create the zip file
            .on('finish', () => ({message: 'File was zipped!!!'}));
        }
        catch(ex) {
            return new Error(ex);
        }
    } )
}

const init =  async (folder) => {
    const fileName = 'Book1.csv';
    try{
        // resolve
        const result = await zip(fileName,folder);
        console.log(result.message);
    }
    catch(ex) {
        // reject
        console.error(ex);
    }
}




app.listen(8000, () => console.log("server is running in port 8000"));


