const http = require('http');
const writeToFile = require('./writeToFile');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    let data = '';
    req.on('data', chunk => {
        data += chunk.toString();
    });
    req.on('end', () => {
        writeToFile(data);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end();
    })
}).listen(4200);