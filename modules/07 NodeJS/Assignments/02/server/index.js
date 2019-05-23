const http = require('http');
const writeFile = require('./write-file');

http.createServer((req,res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end',()=>{
        writeFile(body);
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end();
        })
}).listen(4200);