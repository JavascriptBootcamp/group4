var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1 style="color: red">Gabi is the new king</h1>');
  res.end();
}).listen(6006);