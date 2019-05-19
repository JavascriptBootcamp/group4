const http = require('http')
var JSON1="aa";
const server = http.createServer(function(request, response) {
  console.dir(request.param)

  if (request.method == 'POST') {
    console.log('POST')
    var body = ''
    request.on('data', function(data) {
      body += data
      console.log(body);


    })
    request.on('end', function() {


        JSON1 = body;
        JSON1 = JSON1.split("=");
        JSON1 = JSON1.join(":'");
        JSON1 = JSON1.split("&");
        JSON1 = JSON1.join("',");
        JSON1 = "{'" + JSON1 + "'}"; 



      response.writeHead(200, {'Content-Type': 'text/html'})
      response.end(JSON1)

    })
  } 
})

const port = 5000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
