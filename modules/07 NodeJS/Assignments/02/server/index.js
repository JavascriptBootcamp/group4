const http = require('http');

const writeFile = require('./read-write-file');

http.createServer(function(req,res){

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', '*');

let body = '';
req.on('data',chunk =>{
    body += chunk.toString();
})
req.on('end',()=>{
    writeFile(body);
res.end();
})


}).listen(5000)