const express = require('express');
const cors = require('cors');
const isFilesExists = require('./modules/is-files-exists');
const log = require('./modules/log');
const saveFile = require('./modules/save-file');

const app = express();
const port = 8888;

app.use(express.json());
app.use(cors());
app.use(log);


app.post('/file', (request, response, next) => {
    try {
        const arrFiles = request.body.files;
        const foundFiles = isFilesExists(arrFiles);
        response.locals.requestFiles = foundFiles;
        response.status(200);
        responseJson(response, foundFiles);
    }
    catch{
        response.status(500);
        responseJson(response, "Internal Server Error");
    }
    next();
});

app.use(saveFile);

function responseJson(response, result) {
    response.json({
        result
    });
}

app.listen(port, () => console.log("server is running in port 8888"));