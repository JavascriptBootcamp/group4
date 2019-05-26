const http = require('http');
const writeToFile = require('./writeToFile');
const readFromFile = require('./readFromFile');

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    if (req.method === 'POST') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        let data = '';
        let content;
        req.on('data', chunk => {
            data += chunk.toString();
        });
        req.on('end', () => {
            data = JSON.parse(data);
            if (data["method"] === "POST") {
                data = data["data"];
                writeToFile(JSON.stringify(data));
            }
             else if (data["method"] === "GET") {
                let fileName = data["data"];
                content = readFromFile(fileName);
                res.write(content);
             }
            res.end();
        });
    }

}).listen(5000);