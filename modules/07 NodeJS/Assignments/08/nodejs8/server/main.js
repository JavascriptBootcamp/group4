const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

const chat = [];
const fileName = "log.csv";

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

//Download File
app.get('/download', (request, response) => {
    /*
    response.setHeader('Content-Disposition', 'attachment; filename=\"' + fileName);
    fs.createReadStream(fileName)
        .pipe(response);
    */
    response.download(fileName);
});

// Delete
app.delete('/', (request, response, next) => {
    const id = Number(request.query.id);
    const chatIndex = getIndexById(chat, id);
    response.locals.requestAuthor = chat[chatIndex].author;
    response.locals.requestMessage = chat[chatIndex].message;
    chat.splice(chatIndex, 1);
    responseJson(response, "ok");
    next();
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
    response.locals.requestId = id;

    chat.push({
        id,
        author,
        message
    });
    responseJson(response, "ok");
    next();
});

app.use((request, response, next) => {
    const date = new Date();
    const currentDate = date.toLocaleString("en-US");
    let action = "";
    let id = 0;
    let author = "";
    let message = "";

    if (request.method === "POST") {
        id = response.locals.requestId;
        message = request.body.Message;
        author = request.body.Author;
        action = "ADD";
        const objData = { currentDate, action, id, message, author };
        saveToCsvFile(objData);
    }
    else if (request.method === "DELETE") {
        id = Number(request.query.id);
        message = response.locals.requestMessage;
        author = response.locals.requestAuthor;
        action = "REMOVE";
        const objData = { currentDate, action, id, message, author };
        saveToCsvFile(objData);
    }
    next();
});

function saveToCsvFile(obj) {
    const data = `${obj.currentDate}, ${obj.action}, ${obj.id}, ${obj.message}, ${obj.author}\n`;
    console.log(data);
    fs.appendFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('Data Saved!');
    });
}

function getIndexById(arr, id) {
    return arr.findIndex(item => item.id === id);
}

function responseJson(response, result) {
    response.json({
        result
    });
}

app.listen(8000, () => console.log("server is running in port 8000"));