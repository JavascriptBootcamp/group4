const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;

const app = express();

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

const chat = [];


app.use((request, response, next) => {
    const date = new Date();
    let id = "";
    let author = "";
    let message = "";
    let method = "";

    if (request.method === "POST") {
        id =request.body.Id;
        author = request.body.Author;
        message = request.body.Message;
        method = "ADD";
        addToLog({ date: date.toLocaleString(), method: method, id: id, message: message, author: author });
    }
    else if (request.method === "DELETE") {
        id = Number(request.query.id);
        const chatIndex = getIndexById(chat, id);
        author = chat[chatIndex].author;
        message = chat[chatIndex].message;
        method = "Remove";
        addToLog({ date: date.toLocaleString(), method: method, id: id, message: message, author: author });
    }
    next();
});


function addToLog(details) {
    const fileName = "logChat.csv";
    const data = `${details.date}, ${details.method}, ${details.id}, ${details.message}, ${details.author}\n`;
    fs.appendFile(fileName, data, 'utf8')
        .then(() => console.log("Log updated!"))
        .catch(error => console.log("error"));
}

app.get('/download', function(req, res){
    const fileName = "logChat.csv";
    const file = `${fileName}`;
    res.download(file); // 
  });


// Read
app.get('/', (request, response) => {
    if ((Object.keys(request.query)[0]) === 'search')  // for search word
        responseJson(response, searchStringInChat(request.query.search));
    else
        responseJson(response, chat);
});

function searchStringInChat(str) {
    let arr = [];
    arr = chat.filter(message => message.message.includes(str));
    console.log(arr);
    return arr;
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