const express = require('express');
const cors = require('cors');
const fs = require('fs');
const csvWriter = require('csv-write-stream')

// const writer = csvWriter()

const app = express();

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

const chat = [];
const logFile = 'log';

// Read
app.get('/', (request, response) => {
    const mess = request.query.search;
    if (mess) {
        const res = searchMess(mess);
        responseJson(response, res);
    }
    else
        responseJson(response, chat);
});

function searchMess(mess) {
    return chat.filter((message) => message.message.indexOf(mess) !== -1)
}
// Delete
app.delete('/', (request, response) => {
    const id = Number(request.query.id);
    const chatIndex = getIndexById(chat, id);
    chat.splice(chatIndex, 1);
    responseJson(response, "ok");
});

// Update
app.put('/', (request, response) => {
    const id = Number(request.query.id);
    const chatIndex = getIndexById(chat, id);
    chat[chatIndex].message = request.body.message;
    responseJson(response, "ok");
});

// Create
app.post('/', (request, response, next) => {
    const id = Math.floor(Math.random() * 10000);
    const author = request.body.Author;
    const message = request.body.Message;
    response.locals.id = id;

    chat.push({
        id,
        author,
        message
    });
    next();
});

app.post('/', (request, response) => {
    const now = new Date();
    const action = 'ADD';
    const id = response.locals.id;
    const author = request.body.Author;
    const message = request.body.Message;

    const toWrite = {
        now,
        action,
        id,
        author,
        message
    };
    writeToCSV(toWrite);

    responseJson(response, "ok");
});

function getIndexById(arr, id) {
    return arr.findIndex(item => item.id === id);
}

function responseJson(response, result) {
    response.json({
        result
    });
}

function writeToCSV(data) {
    const writer = csvWriter()    
    writer.pipe(fs.createWriteStream(`${logFile}.csv`, { flags: 'a' }));
    writer.write(data);
    writer.end();
}

//app.use()



app.listen(8000, () => console.log("server is running in port 8000"));