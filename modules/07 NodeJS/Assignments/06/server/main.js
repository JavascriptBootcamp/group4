const fs = require('fs');
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'search')));
app.use(cors());
app.use(express.json());

app.use(myLogger);

function myLogger(req, res, next) {
    if (req.method === "POST") {
        console.log(req.body.files);
    }
    next();
}

app.post('/file', (req, res) => {
    try {
        const filesExists = checkExists(req.body.files);
        writeToFile(filesExists);
        res.send(filesExists);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

function checkExists(files) {
    let fileExists = "";
    let filesPath = "";

    for (const file of files) {
        filesPath = path.join("documents", file);
        if (fs.existsSync(filesPath)) {
            fileExists += `${file} `;
        }
    }
    return fileExists;
}

function writeToFile(filesExists) {
    const foundFiles = "found_files.txt";
    let writeStream = fs.createWriteStream(foundFiles);
    writeStream.write(filesExists);
}

app.listen(process.env.PORT || 8000, () => console.log("server is running"));