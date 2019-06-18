const promFS = require('./moduleFs');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
// Custom middleware
// app.use( (request, response, next) => {
//     console.log("Received a request...");
//     request.body = "moshiko is the king";

//     // identhify method
//     console.log("request.method", request.method);
//     if (request.method === "GET") {
//         // do something
//         // readFromJSON();
//     }
//     else if (request.method === "POST") {
//         // do something
//         // writeToJSON();
//     }

//     next();
// });


app.get('/', (req, res, next) => {
    // readFromJSON();
    res.end("OK")
});

async function writeFile(data) {
    let fileExists = "";

    for (let fileOfData of data) {
        await promFS.readFileIfExists(`.\\documents\\${fileOfData}`)
            .then(isExists => {
                console.log(`isExists:${isExists}`);
                fileExists += `${fileOfData} `;
            })
            .catch(isExists => {
                console.error(`isExists: ${isExists}`);
            });
    }

    await promFS.writeFilePromise(fileExists)
        .then(status => {
            console.log(`The files exists are: ${status}`);
        })
        .catch(error => {
            console.error(`The error is ${error}`);
        });
};

app.post('/file', (req, res) => {
    // writeToJSON();
    console.log(req.body.file);
    writeFile(req.body.file);

    res.end("OK");
});

app.listen(5000, console.log("server on"));