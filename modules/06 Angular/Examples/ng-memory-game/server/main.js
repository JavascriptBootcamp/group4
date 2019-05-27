const http = require('http');
const url = require('url');
const rp = require('request-promise');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

http.createServer((req, res) => {
    const url_parts = url.parse(req.url, true);
    const query = url_parts.query;
    const uri = 'http://www.google.com/search?tbm=isch&q=' + query.keyword;
    // const options = {
    //     proxy: 'http://10.90.254.204',
    //     uri: 'http://www.google.com/search?tbm=isch&q=' + query.keyword,
    //     method: 'GET'
    // }
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', '*');

    rp(uri)
        .then(html => {
            const imgArr = [];
            const dom = new JSDOM(html);
            for (let i = 2; i <= 9; i++) {
                const img = dom.window.document.querySelectorAll("img")[i].getAttribute("src");
                imgArr.push(img);
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(JSON.stringify(imgArr));
        });

}).listen(5000);
