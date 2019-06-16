const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

const log_file_name = "chet_action_log.csv";
const chat = [];

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
app.delete('/', (request, response, next) => {
    const id = Number(request.query.id);
    const chatIndex = getIndexById(chat, id);
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
    response.locals.requestMsg = message;

    chat.push({
        id,
        author,
        message
    });
    responseJson(response, "ok");
    next();
});


// Custom middleware - saves user actions in a CSV file.
app.use( (request, response, next) => {
    let action = "";
    let id = 0;
    let date = new Date();
    let message = "";
    let author = "";
    let save = false;

    // identhify method
    if (request.method === "DELETE") {
        action = "REMOVE";
        id = Number(request.query.id);
        const chatIndex = getIndexById(chat, id);
        message = chat[chatIndex].Message;
        author = chat[chatIndex].author;
        save = true;
    }
    else if (request.method === "POST") {
        action = "ADD";
        id = response.locals.requestId;
        message = response.locals.requestMsg;
        author = request.body.Author;
        save = true;
    }

    if(save) {
        //creat the log data
        log_for_save = `${date},${action},${id},${message},${author}\n`;
        //save the data in the csv file
        fs.appendFileSync(log_file_name, log_for_save);
    }

    next();
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