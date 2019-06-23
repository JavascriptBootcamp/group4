const express = require('express');
const cors = require('cors');
const http = require('http');
const writeFile = require('./write-file');
const app = express();

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

const chat = [];

// Readf
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


app.use((request, response,next) => {
    if (request.method === 'POST') {
        const now = new Date().toLocaleString().replace(',', '');
        const action = 'ADD';
        const id = Math.floor(Math.random() * 10000);
       // response.locals.id = id;
        const author = request.body.Author;
        const message = request.body.Message;

         const toWrite = `${now}, ${action}, ${id}, ${message}, ${author} \n`;
         writeFile( toWrite);
        next();
    }
    if (request.method === 'DELETE') {
        const now = new Date().toLocaleString().replace(',', '');
        const action = 'DELETE';
        const id = Number(request.query.id);
        response.locals.id = id;
        const chatIndex = getIndexById(chat, id);
        const author = chat[chatIndex].author;
        const message = chat[chatIndex].message;

         const toWrite = `${now}, ${action}, ${id}, ${message}, ${author} \n`;
         writeFile( toWrite);

       next();
    }
});


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
    const id = Math.floor(Math.random() * 10000);
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