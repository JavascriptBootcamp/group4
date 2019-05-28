const request = require('request');
const http = require('http');
const rp = require('request-promise');
const url = require('url');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


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
.then( html =>  { 
    console.log (html);
   const dom = new JSDOM(html);

    //const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
    console.log(dom.window.document.querySelectorAll("p").innerHTML);
    //dom.window.document.querySelectorAll("li").textContent; // "Hello world"

    res.end(dom.window.document.querySelectorAll("p").innerHTML);
   // res.end(html)

} ); 
} ).listen(5000);