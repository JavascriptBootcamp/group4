const express = require('express');
const cors = require('cors');
const fs = require('fs');


const app = express();

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

const chat = [];
const logFile = 'log';

writeTitleCSVFile();

function writeTitleCSVFile(){
    const toWrite = "Date, Action, Id, Message, Author \n";
    writeToFile(logFile, 'csv', toWrite,"n");
}

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

app.get('/downlaod-log',(req, res)=>{
    const logCSV = logFile + ".csv";
    if(!fs.existsSync(logCSV)){
        res.end("No such file!");
    }
    res.setHeader('Content-Disposition', `attachment;filename=\"${logCSV}`);
    fs.createReadStream(logCSV).pipe(res);
});

app.get('/is-file-exists',(req, res)=>{
    console.log("is-file-exists")
    const logCSV = logFile + ".csv";
    res.end(JSON.stringify(fs.existsSync(logCSV)));
});

function searchMess(mess) {
    return chat.filter((message) => message.message.indexOf(mess) !== -1);
}

app.use((request, response,next) => {
    if (request.method === 'POST') {
        const now = new Date().toLocaleString().replace(',', '');
        const action = 'ADD';
        const id = Math.floor(Math.random() * 10000);
        response.locals.id = id;
        const author = request.body.Author;
        const message = request.body.Message;

        const toWrite = `${now}, ${action}, ${id}, ${message}, ${author} \n`;
        writeToFile(logFile, 'csv', toWrite,'a');
        next();
    }
    if (request.method === 'DELETE') {
        const now = new Date().toLocaleString().replace(',', '');
        const action = 'DELETE';
        const id = Number(request.query.id);
        response.locals.id = id;
        const chatIndex = getIndexById(chat, id);
        const author = chat[chatIndex].author;
        const message = chat[chatIndex].message;

        const toWrite = `${now}, ${action}, ${id}, ${message}, ${author} \n`;
        writeToFile(logFile, 'csv', toWrite,'a');

        next();
    }
});

// Delete
app.delete('/', (request, response) => {
    const id = response.locals.id;
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
app.post('/', (request, response, next) => {
    const author = request.body.Author;
    const message = request.body.Message;
    const id = response.locals.id;
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

function writeToFile(fileName, suffix, data, mode) {
    const writeFunc = mode === "a" ? fs.appendFile : fs.writeFile;
    writeFunc(fileName + `.${suffix}`, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("The file saved!");
    });
}

app.listen(8000, () => console.log("server is running in port 8000"));