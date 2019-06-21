const promFS = require('./moduleFs');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
    if (req.method === "POST") {
        const filesList = req.body;
        console.log(filesList);
        next();
    }
});

 function isExixtsWrite(data) {
    let fileExists = "";
    const fileFounds = "found_files.txt";

    for (let fileOfData of data) {
        if (fs.existsSync(path.join(`documents`, fileOfData))) {
            fileExists += `${fileOfData} \n`;
        }
    }

    let fileStream = fs.createWriteStream(fileFounds);
    fileStream.write(fileExists);
    console.log(`isExists: ${fileExists}`);
    return fileExists;

};

app.post('/file', (req, res) => {

    let files = isExixtsWrite(req.body.file);
    console.log((files));
    res.end( JSON.stringify(files));
});


app.listen(5000, console.log("server is running in port 5000"));