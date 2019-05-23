const http = require('http');
const writeFile = require('./modules/write-file');

http.createServer((req, res) => {

    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        
        writeFile(body);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1 style="color: red">File was created</h1>');
        res.end();
    })
}).listen(5000);