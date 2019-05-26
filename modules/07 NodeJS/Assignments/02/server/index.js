const http = require('http');
const wf = require('./fsOperation');
var url = require('url');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === "POST") {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const fileNumber = JSON.parse(body).id
            wf.writeToFile(fileNumber, body);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h1 style="color: red">File was created</h1>');
            res.end();
        })
    }
    else if (req.method === "GET") {
        if (req.url === "/") {
            const numberOfFiles = wf.getfiles();
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(JSON.stringify(numberOfFiles));
            res.end();
        }
        else {
            const url_parts = url.parse(req.url, true);
            const query = url_parts.query.tableNum;
            const fileContent = wf.readFromFile("contacts_" + query);
            if (fileContent) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(fileContent);
                res.end();
            }
        }
    }
}).listen(5000);
