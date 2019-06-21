const express = require('express');
const cors = require('cors');
const fs = require('fs');

const { promisify } = require('util');

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


app.get('/download', (request, response) => {
    response.download('./actions.csv');
});



// Delete
app.delete('/', async (request, response, next) => {
    const id = Number(request.query.id);
    const chatIndex = getIndexById(chat, id);

    const promisifyReadFile = promisify(fs.appendFile);
    promisifyReadFile ('actions.csv', `${new Date()} DELETE ${id} ${chat[chatIndex].message} ${chat[chatIndex].author}`)
    
    chat.splice(chatIndex, 1);
    responseJson(response, "ok");
    
    // await fs.appendFile('actions.csv', `${new Date()} DELETE ${request.body.id} ${request.body.message} ${request.body.auther}`)
    next();
});




// Create
app.post('/', (request, response) => {
    const id = Math.floor(Math.random() * 10000);
    const author = request.body.Author;
    const message = request.body.Message;

    // Using Promisify
    const promisifyReadFile = promisify(fs.appendFile);

    chat.push({
        id,
        author,
        message
    });
    responseJson(response, "ok");
    console.log(author,message);
    promisifyReadFile ('actions.csv', `${new Date()} ADD ${id} ${message} ${author}`)
    response.end('End of my Middlewere');
});




// Update
app.put('/', (request, response) => {
    const id = Number(request.query.id);
    const chatIndex = getIndexById(chat, id);
    chat[chatIndex].message = request.body.message;
    responseJson(response, "ok");
});




function getIndexById(arr, id) {
    return arr.findIndex(item => item.id === id);
}

async function append(action) {
    await fs.appendFile('actions.csv', `${new Date()} ${action} ${req.body.id} ${req.body.message} ${req.body.auther}`)
}

function responseJson(response, result) {
    response.json({
        result
    });
}

app.listen(8000, () => console.log("server is running in port 8000"));




//// New Code

// const express = require('express');
// const fs = require('fs');
// const app = express();

// const middle = async (req, res) => {  /////// add async!!!!
//     let action;
//     switch (req.method) {
//         case 'POST':
//             console.log('Added information');
//             action = 'ADD';
//             break;
//         case 'DELETE':
//             console.log('Deleted information');
//             action = 'REMOVE';
//             break;
//     }
//     await fs.appendFile('actions.csv', `${new Date()} ${action} ${req.body.id} ${req.body.message} ${req.body.auther}`)
//     console.log("middleware method " + req.method);
//     res.end();
// }


// async function append(action) {
//     await fs.appendFile('actions.csv', `${new Date()} ${action} ${req.body.id} ${req.body.message} ${req.body.auther}`)
// }



// app.use(middle);

// // GET
// // app.get('/', (request, response) => {
// //     request.json
// // });


// // POST
// app.post('/', middle);
// app.delete('/', middle);



// app.listen(8000, () => console.log("server is running in port 8000"));
