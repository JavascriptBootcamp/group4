const http = require('http');
const writeToFile = require('./writeToFile');
const readFromFile = require('./readFromFile');
const getAllFiles = require('./files');
var url = require('url');

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // var url_parts = url.parse(req.url, true);
    // console.log(req.params);
    if (req.method === 'POST') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        let data = '';
        let fileName = '';
        let content='';
        req.on('data', chunk => {
            data += chunk.toString();
        });
        req.on('end', () => {
            data = JSON.parse(data);
            if (data["method"] === "POST") {
                fileName = data["fileName"];
                data = data["data"];
                writeToFile(fileName,JSON.stringify(data));
            }
             else if (data["method"] === "GET") {
                fileName = data["fileName"];
                content = readFromFile(fileName);
                res.write(content);
             }
            res.end();
        });
    }
    else if(req.method === 'GET') {
         let allSuffixFiles = getAllFiles(process.cwd(),"json");
         res.write(JSON.stringify(allSuffixFiles));
         res.end();
    }

}).listen(5000);