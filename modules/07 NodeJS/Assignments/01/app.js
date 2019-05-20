var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var q = url.parse(req.url, true);
    var qdata = q.query;
    res.write(JSON.stringify(qdata));
    res.end();
}).listen(5000);