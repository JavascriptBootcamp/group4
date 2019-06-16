const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;

const app = express();
const chat = [];

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());
app.use((request, response, next) => {
    const date = new Date();
    let id = "";
    let author = "";
    let message = "";
    let method = "";

    if (request.method === "POST") {
        id = request.body.Id;
        author = request.body.Author;
        message = request.body.Message;
        method = "ADD";
        addToLog({ date: date.toLocaleString(), method: method, id: id, message: message, author: author });
    }
    else if (request.method === "DELETE") {
        id = Number(request.query.id);
        const chatIndex = getIndexById(chat, id);
        console.log(chatIndex);
        author = chat[chatIndex].author;
        message = chat[chatIndex].message;
        method = "Remove";
        addToLog({ date: date.toLocaleString(), method: method, id: id, message: message, author: author });
    }

    next();
});
function addToLog(details) {
    const fileName = "logmessages.csv";
    // const data = details;
    // console.log(details.date, details.method, details.id, details.message, details.author);
    const data = `${details.date},${details.method},${details.id},${details.message},${details.author}`;
    fs.appendFile(fileName, data, 'utf8')
        .then(res => console.log("The data was appended to file!"))
        .catch(err => console.log(err));
}

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
app.post('/', (request, response) => {
    const id = request.body.Id;
    const author = request.body.Author;
    const message = request.body.Message;

    chat.push({
        id,
        author,
        message
    });
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

app.listen(8000, () => console.log("server is running in port 8000"));