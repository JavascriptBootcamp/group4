const express = require('express');

const app = express();

// Custom middleware
app.use( (request, response, next) => {
    console.log("Received a request...");
    request.body = "moshiko is the king";

    // identhify method
    console.log("request.method", request.method);
    if (request.method === "GET") {
        // do something
        // readFromJSON();
    }
    else if (request.method === "POST") {
        // do something
        // writeToJSON();
    }

    next();
});

app.get('/:num', (req,res,next) => {
    // readFromJSON();
    console.log("req.body", req.body);
    res.end("OK: " + req.body);
    next();
})

app.get('/:id', (req,res,next) => {
    // readFromJSON();
    console.log("req.body2", req.body);
    res.end("OK2: " + req.body)
});

app.post('/something', (req,res) => {
    // writeToJSON();
    res.end("OK")
})

app.listen(5000);