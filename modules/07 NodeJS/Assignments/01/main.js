var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    var urlParts = url.parse(req.url, true);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(urlParts.query));
    res.end();
}).listen(5000);