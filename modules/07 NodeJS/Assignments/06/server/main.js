const express = require('express');
const stream = require('./stream');
const app = express();
const port = 8000;

app.use(express.json());

app.post('/file', (req, res , next) => {
    const listOfFiles = req.body.files;
    stream.writeToListFiles(listOfFiles);
    res.status(200).end("OK");
    next();
});

app.post('/file', (req, res , next) => {
    const listOfFiles = req.body.files;
   console.log(listOfFiles);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));