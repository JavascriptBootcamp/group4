const express = require('express');
const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json()); // Middleware - for reading the BODY

const messages = [];

// Read
app.get('/', (request, response) => {
    responseJson(response, messages);
});


// Delete
app.delete('/', (request, response) => {
    const messageId = Number(request.query.id);
    const messageIndex = getIndexById(messages, messageId);
    messages.splice(messageIndex, 1);
    responseJson(response, "ok");
});

// Update
app.put('/', (request, response) => {
    const messageId = Number(request.query.id);
    const messageIndex = getIndexById(messages, messageId);
    messages[messageIndex].author = request.body.author;
    messages[messageIndex].message = request.body.message;
    responseJson(response, "ok");
});

// Create
app.post('/', (request, response) => {
    const newMessageId = Math.floor(Math.random() * 10000);
    const newMessageAuthor = request.body.author;
    const newMessageMessage = request.body.message;
    messages.push({
        id: newMessageId,
        author: newMessageAuthor,
        message: newMessageMessage
    });
    response.json(messages[messages.length-1]);
    // responseJson(response, "ok");
});


function getIndexById(arr, id) {
    return arr.findIndex(item => item.id === id);
}

function responseJson(response, result) {
    response.json({result});
}

app.listen(8000, () => console.log("server is running in port 8000"));