const http = require('http');
const writeFile = require('./modules/write-file');
const readFile = require('./modules/read-file');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', '*');

    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        body = JSON.parse(body);
        if (body["method"] === "POST") {
            writeFile(JSON.stringify(body["body"]), body["fileName"]);
        }
        else if (body["method"] === "GET") {
            let data = readFile(body["fileName"]);
            res.write(data);
        }
        res.end();
    })
}).listen(5000);