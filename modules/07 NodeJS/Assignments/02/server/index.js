const http = require('http');
const writeFile = require('./modules/write-file');
// const readFile = require('./modules/read-file');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', '*');

    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        writeFile(body);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(body);
        res.end();
    })
}).listen(5000);