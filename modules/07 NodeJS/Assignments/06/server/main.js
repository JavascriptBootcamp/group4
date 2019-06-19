const express = require('express');
const stream = require('./stream');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 8000;
const fileFounds = "found_files.txt";

app.use(cors());
app.use(express.json());

app.post('/file', (req, res, next) => {
    const listOfFiles = req.body.files;
    let file = "";
    try {
        stream.writeToListFiles(listOfFiles);
        fs.createReadStream(fileFounds)
            .on("data", (data) => {
                file += data.toString();
            }).on('end', () => {
                res.status(200).end(res.json({ file }));
            });
    }
    catch (e) {
        res.status(500).end("Error" + e);
    }
    next();
});

app.post('/file', (req, res) => {
    const listOfFiles = req.body.files;
    console.log(listOfFiles);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));