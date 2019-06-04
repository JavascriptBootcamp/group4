const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

const chat = [];

// Read
app.get('/', (request, response) => {
    const searchValue = request.query.searchValue;
    const searchStartIndex = +request.query.searchStartIndex;
    const searchEndIndex = +request.query.searchEndIndex;
    console.log( searchValue,searchStartIndex,searchEndIndex,chat);
    const newChat = chat.filter(c=>c.message.includes(searchValue)).slice(searchStartIndex,searchEndIndex);
    const isloadMore = chat.filter(c=>c.message.includes(searchValue)).slice(searchStartIndex+5,searchEndIndex+5).length>0;
    const data = {
        newChat,
        isloadMore
    }
    responseJson(response, data);
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

    console.log("author", author);
    console.log("message", message);

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