var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  res.write(JSON.stringify(query));
  res.end();
}).listen(5000);
