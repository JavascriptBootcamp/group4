const express = require('express');
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const app = express();
//zip the file fron the source path
const zip = (source) => {
    return new Promise( (resolve, reject) => {
        try{
            const backupPath = path.join("backup",path.basename(source));// --> backup/filename
            fs.createReadStream(source) //read the stream
            .pipe(zlib.createGzip()) // zip the file
            .pipe(fs.createWriteStream(`${backupPath}.gz`)) // create the zip file
            .on('finish', () => resolve({message: 'File was zipped!!!'}));
        }
        catch(ex) {
            reject(ex);
        }
    } )
}

app.use(express.json()); // Middleware - for reading the BODY

// Read
app.get('/', async (request, response) => {
    try {
        const srcPath = path.join("students.csv");
        await zip(srcPath);
        response.json({ result: "File backed up successfully"});
    } catch (err) {
        response.json({ result: `File backed up faild. ex - ${err}`});
    }
});


app.listen(8000, () => console.log("server is running in port 8000"));