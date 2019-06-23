const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { promisify } = require('util');
const app = express();
const port = 8000;
const fileFounds = "found_files.txt";



app.use(cors());
app.use(express.json());

app.post('/file', (req, res, next) => {
    const arr = [];
    const listOfFiles = req.body.files;
    try {
        const promiseWriteToFile = fs.createWriteStream(fileFounds);
        for (let file of listOfFiles) {
            if (fs.existsSync(`documents/${file}`)) {
                promiseWriteToFile.write(`${file}\n`);
                arr.push(file);
            }
        }
        promiseWriteToFile.end();
        responseJson(res, { status: "OK", files: arr });
    }
    catch (e) {
        res.statusCode = 500;
        res.send({ response: e });
    }
    next();
});

app.post('/file', (req, res) => {
    const listOfFiles = req.body.files;
    console.log(listOfFiles);
});

function responseJson(res, data) {
    res.json(data);
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));