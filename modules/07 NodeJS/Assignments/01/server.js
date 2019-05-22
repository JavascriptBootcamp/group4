
var http = require('http');
var url = require('url');

const server = http.createServer( (req, res) => {
    //console.log('Server has been created and listening for request!');
    console.log('headers: ', req.headers);
    console.log('method: ', req.method);
    console.log('url: ', req.url);

    const author = {
        firstName: 'David',
        lastName: 'Lev'
    };

    //res.setHeader('Content-Type', 'text/html');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(url.parse(req.url, true).query));
    //res.end(`<h1 style="color: blue"> End of response </h1>`);
    res.end(`\n\n Author: ${JSON.stringify(author)}`);
}).listen(5000); 
