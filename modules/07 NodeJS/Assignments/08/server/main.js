const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

const log_file = "chet_action_log.csv";
const chat = [];
let removedMsg = null;

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

//download the backup file
app.get('/download', function(req, res){
    if(fs.existsSync(log_file)) {
        res.download(log_file); // Set disposition and send it.
    }
    else {
        res.status(500).send("File to download wasn't found");
    }
});

// Delete
app.delete('/', (request, response, next) => {
    const id = Number(request.query.id);
    const chatIndex = getIndexById(chat, id);
    //save the delete massege for the use of the middlware that handele "REMOVE" action
    removedMsg = chat.splice(chatIndex, 1)[0];
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


// Custom middleware for "ADD" AND "REMOVE" actions - saves user actions in a CSV file.
app.use( (request, response, next) => {
    let action = "";
    let id = 0;
    let date = new Date();
    let message = "";
    let author = "";
    let save = false;

    // identhify method
    if (request.method === "DELETE" && removedMsg && removedMsg.id === Number(request.query.id)) {
        action = "REMOVE";
        id = Number(request.query.id);
        message = removedMsg.message;
        author = removedMsg.author;
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
        //save the data in the csv file - if the file dosnt exist creat it
        fs.appendFileSync(log_file, log_for_save);
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