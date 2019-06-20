
const http = require('http');
const url = require('url');
const rp = require('request-promise');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const server = http.createServer( (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', '*');

    let searchTopic = '';
    for (let i = 0; i < req.url.length; i++) {
        if (req.url[i] !== '/' && req.url[i] !== '?') {
            searchTopic += req.url[i];
        }
    }

   
    rp(`https://www.google.com/search?q=${searchTopic}&tbm=isch`)
    .then( data => {
        const dom = new JSDOM(data);
        let imagesSrcArr = [];
        const imagesElems = dom.window.document.querySelectorAll("img");

        for(let i = 0; i <= 8; i++) {
            if (i !== 0) {
                imagesSrcArr.push(imagesElems[i].getAttribute("src"));
                
            }    
        }
        
        
        res.end(`\n\n${JSON.stringify(imagesSrcArr)}`);

    } ); 
} ).listen(5000); 