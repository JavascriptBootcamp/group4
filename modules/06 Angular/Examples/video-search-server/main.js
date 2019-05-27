const http = require('http');
const rp = require('request-promise');
const url = require('url');

http.createServer( (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', '*');

    var query = url.parse(req.url,true).query;
    const actorName = query.actorName;

    console.log(actorName);

    rp('https://en.wikipedia.org/wiki/' + actorName)
.then( html => res.end(html) ); 
} ).listen(5000);