const express = require('express');

const { performance } = require('perf_hooks');

const app = express();

let nextRequestId = 0;

app.use(function(req, res, next) {
    res.locals.requestId = ++nextRequestId;
    next();
});

app.use(function(req, res, next) {
    const before = performance.now();
    console.log(`BEGIN(${res.locals.requestId})`);


    next();


    res.on("finish", function() {
        const after = performance.now();
        console.log(`END(${res.locals.requestId})`);
        console.log(`TOOK: ${after - before}`);
    });
});

app.use( (req, res) => {
    console.log("Third middleware");
    res.end("OK");
} ) 

app.listen(8888);