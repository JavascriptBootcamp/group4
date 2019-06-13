const fs = require('fs');
const zlib = require('zlib');
const path = require('path');
const express = require('express');

const app = express();

const fileName = "students.csv";

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
    try {
        const result = await zip(fileName);
        console.log(result.message);
        response.json({ mess: result.message });
    } catch (error) {
        console.log(error);
        response.json({ mess: error });
    }
});

// Download
app.get('/download', (request, response) => {
    const filePath = path.join("backup", `${fileName}.gz`);

    response.setHeader('Content-Disposition', 'attachment; filename=\"' + filePath);

    fs.createReadStream(filePath)
    .pipe(response);
})

app.listen(8500, () => console.log("server is running in port 8500"));