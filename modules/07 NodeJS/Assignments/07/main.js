const express = require('express');
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');


const app = express();

app.use(express.json()); // Middleware - for reading the BODY


// Read
app.get('/', (request, response) => {
    init();
    responseJson(response, "ok");
  
});


const zip = (source) => {
    return new Promise( (resolve, reject) => {
        try{
            fs.createReadStream(source) //read the stream
            .pipe(zlib.createGzip()) // zip the file
            .pipe(fs.createWriteStream(path.join('backup', `${source}.gz`))) // create the zip file
            .on('finish', () => ({message: 'File was zipped!!!'}));

        }
        catch(ex) {
            return new Error(ex);
        }
    } )
}



const init =  async () => {
    const fileName = 'book1.csv';
    try{
        // resolve
        const result = await zip(fileName);
        console.log(result.message);
    }
    catch(ex) {
        // reject
        console.error(ex);
    }
};

function responseJson(response, result) {
    response.json({
        result
    });
}



app.listen(8000, () => console.log("server is running in port 8000"));