const express = require('express');
const cors = require('cors');
const app = express();
const { promisify } = require('util');
const fs = require('fs');
app.use(express.json());
app.use(cors());


const chat = [];

app.get('/', (req, res) => {
    res.json(chat);
});

app.post('/', (req, res, next) => {
    const id = req.query.id;
    const { username, message } = req.body;
    const obj = { id, message, username };
    chat.push(obj);
    responseJson(res, "ok");
    next();
});

const createCsvFile = (source, callback) => {
    try {
        fs.createWriteStream(`${source}.csv`)
            .on('finish', () => callback(null, { message: 'File was zipped!!!' }));
    }
    catch (ex) {
        return callback(ex);
    }
}

app.post('/', async (req, response) => {
    const id = req.query.id;
    const { username, message } = req.body;
    const obj = { id, message, username };
    const csvFile = "log";
    try {
        const promiseFile = promisify(createCsvFile);
        const result = await promiseFile(csvFile);
        response.json({ mess: result.message });
    } catch (error) {
        response.json({ mess: error });
    }
});

app.delete('/', (req, res) => {
    const id = req.query.id;
    const chatIndex = findIndexById(id);
    chat.splice(chatIndex, 1);
    responseJson(res, "ok");
});

app.put('/', (req, res) => {
    const id = req.query.id;
    const message = req.body.message;
    const chatIndex = findIndexById(id);
    chat[chatIndex].message = message;
    responseJson(res, "ok");
});

function findIndexById(id) {
    return chat.findIndex(item => item.id === id);
}
function responseJson(response, result) {
    response.json({
        result
    });
}
app.listen(8000);