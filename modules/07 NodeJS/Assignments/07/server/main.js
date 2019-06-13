const express = require('express');
const app = express();
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');


const zip = (targetDirName, srcFileName) => {
    return new Promise( (resolve, reject) => {
        try{
            const targetFullPath = path.join(targetDirName, path.basename(srcFileName)) + '.gz';
            fs.createReadStream(srcFileName)  //read the stream
            .pipe(zlib.createGzip()) // zip the srcFileName file
            .pipe(fs.createWriteStream(targetFullPath)) // create the zip file in wanted path
            .on('finish', () => resolve( {message: `File was zipped on ${targetFullPath}`} ));
        }
        catch(ex) {
            reject(ex);
        }
    })
}


app.get('/', async (req, res) => {
    try {
        const srcFileName = "students.csv";
        await zip('backup', srcFileName);
        res.json({ result: `File ${srcFileName} successfully backed up `});
    } catch (err) {
        res.json({ result: `Failed to backup the file! \n error: ${err}`});
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));