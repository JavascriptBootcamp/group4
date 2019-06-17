const express = require('express');
const cors = require('cors');
const app = express();
const { promisify } = require('util');
const fs = require('fs');

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'log.csv',
    header: [
        { id: 'date', title: 'DATE' },
        { id: 'action', title: 'ACTION' },
        { id: 'id', title: 'ID' },
        { id: 'message', title: 'MESSAGE' },
        { id: 'username', title: 'USERNAME' }
    ]
});


app.use(express.json());
app.use(cors());


const chat = [];

const createCsvFile = (source, callback) => {
    try {
        fs.createWriteStream(`${source}`)
            .on('finish', () => callback(null, { message: 'File was created!!!' }));
    }
    catch (ex) {
        return callback(ex);
    }
}

app.get('/', (req, res) => {
    const csvFile = "log.csv";
    fs.access(csvFile, fs.F_OK, async (err) => {
        if (err) {
            try {
                const promiseFile = promisify(createCsvFile);
                const result = await promiseFile(csvFile);
                response.json({ mess: result.message });
            } catch (error) {
                response.json({ mess: error });
            }
            return
        }
    })
    res.json(chat);
});

app.get('/download', (req, res) => {
    const csvFile = "log.csv";
    res.setHeader('Content-Disposition', 'attachment; filename=\"' + csvFile);
    fs.createReadStream(csvFile)
        .pipe(res);
});

app.post('/', (req, res, next) => {
    const id = req.query.id;
    const { username, message } = req.body;
    const obj = { id, message, username };
    chat.push(obj);
    responseJson(res, "ok");
    next();
});

app.post('/', (req, response) => {
    const date = new Date();
    const action = "ADD";
    const id = req.query.id;
    const { username, message } = req.body;
    const obj = { date, action, id, message, username };
    const records = [obj];
    csvWriter.writeRecords(records).then(() => { console.log('...Done'); });
});

app.delete('/', (req, res ,next) => {
    const id = req.query.id;
    const chatIndex = findIndexById(id);
    const date = new Date();
    const action = "delete"; 
    const username = chat[chatIndex].username;
    const message = chat[chatIndex].message;
    const obj = { date, action, id, message, username };
    const records = [obj];
    csvWriter.writeRecords(records).then(() => { console.log('...Done'); });
    next();
});

app.delete('/', (req, res ) => {
    const id = req.query.id;
    const chatIndex = findIndexById(id);
    chat.splice(chatIndex, 1);
    responseJson(res, "ok");
});



app.put('/', (req, res) => {
    const id = req.query.id;
    const message = req.body.message;
    const chatIndex = findIndexById(id);
    chat[chatIndex].message = message;
    responseJson(res, "ok");
});

function findIndexById(id) {
    return chat.findIndex(item => item.id === id);
}
function responseJson(response, result) {
    response.json({
        result
    });
}
app.listen(8000);