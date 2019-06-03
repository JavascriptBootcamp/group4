const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

const chat = [];

// Read
app.get('/', (request, response) => {
    responseJson(response, chat);
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