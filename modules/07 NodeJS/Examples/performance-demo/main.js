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

    res.on("finish", function() {
        const after = performance.now();
        console.log(`END(${res.locals.requestId})`);
    });
    
    next();
});

app.use( (req, res) => {
    console.log("Third middleware");
} ) 

app.listen(8888);