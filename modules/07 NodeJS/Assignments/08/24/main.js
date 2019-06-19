const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

const chat = [];
const csvlogMessagesFile = "csvlogMessagesFile.csv";

app.use((request, response, next) => {
    const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0)); 
       let method = "";
    switch (request.method) {
        case "POST": {
            method = "ADD";
            logMessageToCsvFile(date,method,request.body.Id, request.body.Message, request.body.Author);
            break;
        }
        case "DELETE": {
            method = "Remove";
            let messageChat =getChatById(chat,+request.query.id);
            console.log(messageChat+"2");
            console.log(messageChat.message+"  "+request.query.id)

            logMessageToCsvFile(date,method,messageChat.id, messageChat.message, messageChat.author);
            break;
        }
        case "PUT": {
            method = "Update";
            let messageChat = getChatById(chat,+request.query.id);
            console.log(messageChat.message+"  "+request.query.id);
            logMessageToCsvFile(date,method,messageChat.id, messageChat.message, request.body.author);
            break;
        }
        default: {
            break;
        }
    }
    next();
});

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
    console.log("deleted");
    responseJson(response, "ok");
});

// Update
app.put('/', (request, response) => {
    const id = Number(request.query.id);
    const chatIndex = getIndexById(chat, id);
    chat[chatIndex].message = request.body.message;
    console.log("updated");

    responseJson(response, "ok");
});

// Create
app.post('/', (request, response) => {
    const id =request.body.Id; 
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

function getChatById(arr, id) {
    return arr[getIndexById(arr, id)];
}

function responseJson(response, result) {
    response.json({
        result
    });
}

app.get('/CSVLogMessagesFile', (req, res) => {
    res.download(csvlogMessagesFile);
});


function logMessageToCsvFile(date,method,id,mess,author){
    let logObj = date+","+method+","+id+","+mess+","+author+",";
    fs.appendFile('csvlogMessagesFile.csv',logObj, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
}

app.listen(8000, () => console.log("server is running in port 8000"));