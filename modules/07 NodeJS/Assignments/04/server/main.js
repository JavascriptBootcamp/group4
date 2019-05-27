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
    const searchKey = query.searchKey;

    rp(`https://www.google.com/search?q=${searchKey}&tbm=isch`)
.then( data => {
    const dom = new JSDOM(data);
    let images = [];
    const imagesElements = dom.window.document.querySelectorAll("img");
    for(let i=1; i < 9;i++){
        images.push(imagesElements[i].getAttribute("src"));
    }
    console.log("images:",images);
    res.end(JSON.stringify(images));

 } ); 
} ).listen(5000);