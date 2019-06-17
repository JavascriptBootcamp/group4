const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { promisify } = require('util');
const app = express();

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

app.use((request, response, next)=>{

     response.locals.actionType = null;
     var newDate = new Date();
     response.locals.currentDate = newDate.today()
     response.locals.currentTime = newDate.timeNow();
     //console.log(response.locals.currentDate,response.locals.currentTime);
    if(request.method === "POST"){
        response.locals.actionType = "ADD";
    }
    else if(request.method === "DELETE"){
        response.locals.actionType = "REMOVE";
    }

    next();

})

// For todays date;
Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
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


app.get('/download',(request,response)=>{

    const fileName = request.query.fileName;
   // console.log(fileName);
    response.setHeader('Content-Disposition', 'attachment; filename=\"'  + fileName);
    fs.createReadStream(fileName)
    .pipe(response);
})


// Delete
app.delete('/', (request, response) => {
    const id = Number(request.query.id);
    const chatIndex = getIndexById(chat, id);

    apeendToFile(response,chat[chatIndex].id,chat[chatIndex].author,chat[chatIndex].message);

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

    apeendToFile(response,id,author,message);
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


function apeendToFile(response,id,author,message){
    const promiseWriteFile = promisify(fs.appendFile);

    const {actionType,currentDate,currentTime} = response.locals;
    
    promiseWriteFile('userActions.csv', `${actionType} ${currentDate} ${currentTime} ${id} ${message} ${author} \n`);
       
}

app.listen(8000, () => console.log("server is running in port 8000"));