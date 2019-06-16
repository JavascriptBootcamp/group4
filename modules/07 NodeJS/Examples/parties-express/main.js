const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

app.use(express.json()); // Middleware - for reading the BODY
// app.use(bodyParser.json());

const parties = [];

// Read
app.get('/', (request, response) => {
    responseJson(response, parties);
});

 // Delete
app.delete('/', (request, response) => {
    // const partyId = parseInt(request.query.id, 10);
    const apiKey = request.query.apiKey;
    const search = request.query.s;
    const type = request.query.type;
    const page = request.query.page;


    const partyId = Number(request.query.id);
    const partyIndex = getIndexById(parties, partyId);
    parties.splice(partyIndex, 1);
    responseJson(response, "ok");
});

// Update
app.put('/', (request, response) => {
    const partyId = Number(request.query.id);
    const partyIndex = getIndexById(parties, partyId);
    // console.log("request.body", request.body);
    parties[partyIndex].name = request.body.name;
    responseJson(response, "ok");
});

// Create
app.post('/', (request, response) => {
    // const newPartyId = Math.floor(Math.random() * 10000);
    // const newPartyName = request.body.name;
    console.log("request.body", request.body);
    // parties.push({
    //     id: newPartyId,
    //     name: newPartyName
    // });
    // responseJson(response, "ok");
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