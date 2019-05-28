
const http = require('http');
const writeFile = require('./write-file');
const readFile = require('./read-File');
// const getAllFiles = require('./files');
var url = require('url');

http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', '*');

    if (req.method === 'POST') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let data = '';
        req.on('data', chunk => {
            data += chunk.toString();
        });

        req.on('end', () => {
            data = JSON.parse(data);
            if (data["method"] === "POST") {
                writeFile(JSON.stringify(data["data"]),data["fileName"]);
            }

            else if (data["method"] === "GET") {
                content = readFile(data["fileName"]);
                res.write(content);
            } res.end();
        })
    }

}).listen(5000);