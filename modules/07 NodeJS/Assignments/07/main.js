const fs = require('fs');
const zlib = require('zlib');
const path = require('path');
const express = require('express');

const app = express();

const zip = (source) => {
    const filePath = path.join("backup", `${source}.gz`);

    return new Promise((resolve, reject) => {
        try {
            fs.createReadStream(source) //read the stream
                .pipe(zlib.createGzip()) // zip the file
                .pipe(fs.createWriteStream(filePath)) // create the zip file
                .on('finish', () => resolve({ message: 'File was zipped!!!' }));
        }
        catch (ex) {
            reject(ex);
        }
    })
}
// Read
app.get('/', async (request, response) => {
    const fileName = "students.csv";
    try {
        const result = await zip(fileName);
        console.log(result.message);
        response.json({ mess: result.message });
    } catch (error) {
        console.log(error);
        response.json({ mess: error });
    }
});

app.listen(8500, () => console.log("server is running in port 8500"));