const http = require('http');
const wf = require('./writeToFile');

http.createServer((req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        wf(body);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1 style="color: red">File was created</h1>');
        res.end();
    })
    res.end();
}).listen(4200);
