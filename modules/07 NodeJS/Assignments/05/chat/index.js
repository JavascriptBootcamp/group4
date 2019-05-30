const express = require('express');

const app = express();

app.use(express.json()); // Middleware - for reading the BODY

const messages = [{id:1,author:"dsd",massage:"sdsd"}];

// Read
app.get('/', (request, response) => {
   
    responseJson(response, messages);
});


 // Delete
 app.delete('/', (request, response) => {
    const massageId = Number(request.query.id);
    const massageIndex = getIndexById(messages, massageId);
    messages.splice(massageIndex, 1);
    responseJson(response, "ok");
});

// Update
app.put('/', (request, response) => {
    const massageId = Number(request.query.id);
    const massageIndex = getIndexById(messages, massageId);
    messages[massageIndex].author = request.body.author;
    messages[massageIndex].massage = request.body.massage;
    responseJson(response, "ok");
});

// Create
app.post('/', (request, response) => {
    const newMassageId = Math.floor(Math.random() * 10000);
    const newMassageAuthor = request.body.author;
    const newMassageMassage = request.body.massage;

    messages.push({
        id: newMassageId,
        author: newMassageAuthor,
        massage: newMassageMassage
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