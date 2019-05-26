const http = require('http');
const wf = require('./fsOperation');

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
            wf.writeToFile(body);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h1 style="color: red">File was created</h1>');
            res.end();
        })
    }
    else if (req.method === "GET") {
        const fileContent = wf.readFromFile("contacts.json");
        if (fileContent) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(fileContent);
            res.end();
        }
    }
}).listen(5000);
