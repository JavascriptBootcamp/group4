const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({
//     extended: true
//   }));

app.use(express.json()); // Middleware - for reading the BODY

const chat = [];

// Read
app.get('/', (request, response) => {
    responseJson(response, chat);
});

 // Delete
app.delete('/', (request, response) => {
    // const partyId = parseInt(request.query.id, 10);
    const currentId = Number(request.query.id);
    const currentIndex = getIndexById(chat, currentId);
    chat.splice(currentIndex, 1);
    responseJson(response, "ok");
});

// Update
app.put('/', (request, response) => {
    const currentId = Number(request.query.id);
    const currentIndex = getIndexById(chat, currentId);
    // console.log("request.body", request.body);
    chat[currentIndex].author = request.body.author;
    chat[currentIndex].message = request.body.message;
    responseJson(response, "ok");
});

// Create
app.post('/', (request, response) => {
    const id = Math.floor(Math.random() * 10000);
    console.log("request.body:",request.body);
    const author = request.body.author;
    const message = request.body.message;
    chat.push({
        id: id,
        author: author,
        message: message
    });
    responseJson(response, "ok");
});

function getIndexById(arr, id) {
    return arr.findIndex( item => item.id === id);
}

function responseJson(response, result) {
    response.json({
        result
    });
}

app.listen(8000, () => console.log("server is running in port 8000"));