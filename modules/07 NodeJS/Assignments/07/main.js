const express = require('express');
const cors = require('cors');
const path = require('path');
const zlib = require('zlib');
const fs = require('fs');
const app = express();

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());


const zip = (source) => {
    return new Promise( (resolve, reject) => {
        try{
            fs.createReadStream(source) //read the stream
            .pipe(zlib.createGzip()) // zip the file
            .pipe(fs.createWriteStream(path.join('backup',`${source}.gz`))) // create the zip file
            .on('finish', () => resolve({message: 'File was zipped succesfully :)))))))))))))))))))'}));
        }
        catch(ex) {
            return new Error(ex);
        }
    } )
}

app.get('/', async (request, response) => {
    const fileName = 'students.csv';

    try{
        // resolve
        const result = await zip(fileName);
        console.log(result.message);
        response.json({ mess: result.message });
    }
    catch(ex) {
        // reject
        console.error(ex);

        response.json({ mess: ex.message });
    }
});


app.listen(8000, () => console.log("server is running in port 8000"));