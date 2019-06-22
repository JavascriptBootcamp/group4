
const express = require('express');
const cors = require('cors');
const fs = require('fs')

const app = express();

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

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
app.delete('/', (request, response,next) => {
    const id = Number(request.query.id);
    const chatIndex = getIndexById(chat, id);

    response.locals.id=id;
    response.locals.author=chat[chatIndex].author;
    response.locals.message=chat[chatIndex].message;

    chat.splice(chatIndex, 1);
    responseJson(response, "ok");
    next()
});

app.delete('/', (request, response) => {
        let curTime = getDateTime();
        fs.appendFile('actions.csv', curTime + ',' + 'DELETE,' + response.locals.id + ',' + response.locals.message + ',' + response.locals.author + '\n', function (err) {
            if (err) throw err;
            console.log('Deleted!');
        });
    } 
)

// Update
app.put('/', (request, response) => {
    const id = Number(request.query.id);
    const chatIndex = getIndexById(chat, id);
    chat[chatIndex].message = request.body.message;
    responseJson(response, "ok");
});

// Create
app.post('/', (request, response,next) => {
    const id = Math.floor(Math.random() * 10000);
    const author = request.body.Author;
    const message = request.body.Message;
    response.locals.id=id;
    response.locals.author=author;
    response.locals.message=message;
    chat.push({
        id,
        author,
        message
    });
    responseJson(response, "ok");
    next()
});

app.post('/', (request, response) => {

        let curTime = getDateTime();
        fs.appendFile('actions.csv', curTime + ',' + 'ADD,' + response.locals.id + ',' + response.locals.message + ',' + response.locals.author+'\n', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    } 
)
function getDateTime(){
    let curDate = new Date()
    let curTime = curDate.getFullYear()+'/'+ curDate.getMonth()+'/'+curDate.getDay() +' '+ curDate.getHours().toString()+':' + curDate.getMinutes().toString()
    return curTime
}
function getIndexById(arr, id) {
    return arr.findIndex(item => item.id === id);
}

function responseJson(response, result) {
    response.json({
        result
    });
}

app.listen(8000, () => console.log("server is running in port 8000"));