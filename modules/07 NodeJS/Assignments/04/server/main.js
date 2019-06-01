const http = require('http');
const rp = require('request-promise');
const url = require('url');
const { JSDOM } = require("jsdom");
http.createServer( (req, res) => {
    console.log(req.url);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const keyWord = url.parse(req.url,true).query.keyWord;
    rp(`https://www.google.com/search?q=${keyWord}&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi54rHiy8jiAhXFShUIHcz8DZ4Q_AUIECgB&biw=1366&bih=625`)
    .then( data => {
    const jsdom = (new JSDOM(data)).window; 
   const imagesElements = jsdom.document.querySelectorAll("img");
    let fetchImages = [];
    for(let i=0; i < 8;i++){
        fetchImages.push(imagesElements[i].getAttribute("src"));
    }
    res.end(JSON.stringify(fetchImages));
     } ); 
    } ).listen(8000); 