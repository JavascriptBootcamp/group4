// const express = require("express");

// const app = express();

const app = require("express")();
const port = 7777;

app.get('/', (request, response) => {
    response.status(200);
    response.json({
        result: "OK"
    })
});

app.get('/error', (request, response) => {
    response.status(500).json({
        result: "Internal Server Error"
    })
});


app.get('/book/:authorName/date/:year/:month', (request, response) => {
    const { authorName, year,month  } = request.params;
    // response.status(200).json({
    //     authorName: request.params.authorName,
    //     year: request.params.year,
    //     month: request.params.month
    // })
    response.status(200).json({authorName,year,month});
})

app.get('/book*', (request, response) => {
    response.status(200);
    response.json({
        result: "Books"
    });
});

app.get('/write', (request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/html"
    })
    response.write("<h1>moshiko</h1>");
    response.write("<h2>is</h2>");
    response.write("<h3>the</h3>");
    response.write("<h4>king</h4>");
    response.end("<h1>Moshiko is the king</h1>");
});

app.get('/json', (request, response) => {
    // response.send({
    //     ok: true
    // });
    response.send("<h3>Gabi is the king</h3>");
})

app.listen(port, () => console.log(`Server is running on port ${port}`))