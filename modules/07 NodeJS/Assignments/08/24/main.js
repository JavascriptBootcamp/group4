
const fs = require('fs');
const cors = require('cors');
const { promisify } = require('util');

const express = require('express');
const app = express();

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());


app.use((req, res, next)=>{
    let currentRawDate = new Date();
    res.locals.currentDate = currentRawDate.currentDate();
    res.locals.currentTime = currentRawDate.currentTime();
    
    res.locals.actionType = null;

    if(req.method === "POST") res.locals.actionType = "ADD";
    else if(req.method === "DELETE") res.locals.actionType = "REMOVE";
        
    next();
})


Date.prototype.currentDate = function () { 
    let dateDay = ((this.getDate() < 10) ? '0':'') + this.getDate();
    let dateMonth = ( ( (this.getMonth()+1) < 10 ) ? '0' : '' ) + (this.getMonth()+1);
    let dateYear = this.getFullYear();

    return dateDay +'/' + dateMonth + '/' + dateYear;
}

Date.prototype.currentTime = function () {
    let hours = ((this.getHours() < 10) ? "0" : "") + this.getHours();
    let minutes = ((this.getMinutes() < 10)?"0":"") + this.getMinutes();
    let seconds = ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();

    return hours +':' + minutes + ':' + seconds;
}

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
app.delete('/', (request, response) => {
    const id = Number(request.query.id);
    const chatIndex = getIndexById(chat, id);
    chat.splice(chatIndex, 1);

    writeDataToFile(response,chat[0].id, chat[0].author, chat[0].message);

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

    writeDataToFile(response, id, author, message);

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


function writeDataToFile(response, messageId, authorName, messageContent){
    const writeFilePromise = promisify(fs.appendFile);
    
    writeFilePromise(
        'user_actions.csv', 
        `
        Date: ${response.locals.currentDate}, 
        Time: ${response.locals.currentTime}, 
        Action Type: ${response.locals.actionType}, 
        Message ID: ${messageId},
        Message Content: ${messageContent}, 
        Author Name: ${authorName} 
        \n
        `
    );

}

app.listen(8000, () => console.log("server is running in port 8000")); 