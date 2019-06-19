const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const LogMessage = require('./logmessage');

const app = express();
const chat = [];
const fileName = "logmessages.csv";
const logMessage = new LogMessage();

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

app.use((request, response, next) => {
    const date = new Date().toLocaleString();;
    let method = "";
    switch (request.method) {
        case "POST": {
            method = "ADD";
            logMessage.setLogMessage(request.body.Id, request.body.Author, request.body.Message, date, null);
            addToLog(method);
            break;
        }
        case "DELETE": {
            method = "Remove";
            let messageChat = getMessageChat(request.query.id)
            logMessage.setLogMessage(messageChat.message.id, messageChat.message.author, messageChat.message.message, date, messageChat.chatIndex);
            addToLog(method);
            break;
        }
        case "PUT": {
            method = "Update";
            let messageChat = getMessageChat(request.query.id)
            logMessage.setLogMessage(messageChat.message.id, messageChat.message.author, request.body.message, date, messageChat.chatIndex);
            addToLog(method);
            break;
        }
        default: {
            break;
        }
    }
    next();
});

function getMessageChat(id) {
    let chatIndex = getIndexById(chat, Number(id));
    return { message: chat[chatIndex], chatIndex };
}
function addToLog(method) {
    const data = `${logMessage.date},${method},${logMessage.id},${logMessage.message},${logMessage.author}\n`;

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
app.get('/download', (req, res) => {
    res.download(fileName);
});
function searchMess(mess) {
    return chat.filter((message) => message.message.indexOf(mess) !== -1)
}
// Delete
app.delete('/', (request, response) => {
    chat.splice(logMessage.chatIndex, 1);
    responseJson(response, "ok");
});

// Update
app.put('/', (request, response) => {
    chat[logMessage.chatIndex].message = request.body.message;
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