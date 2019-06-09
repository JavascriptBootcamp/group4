const http = require('http');
const rp = require('request-promise');
const url = require('url');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

http.createServer((req, res) => {
   
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', '*');

    var query = url.parse(req.url, true).query;
    const imgCategory = query.imgCategory;

    const googleUrl = `https://www.google.com/search?hl=iw&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjYwLftlt3iAhXNyKQKHdesCK4Q_AUIECgB&biw=1280&bih=610&q=${imgCategory}`;

    rp(googleUrl)
        .then(html => {
            const dom = new JSDOM(html);
            const allImages = dom.window.document.querySelectorAll("img");
            const srcArr = [];
            for (let i = 1; i < 9; i++) {
                srcArr.push(allImages[i].getAttribute("src"));
            }
            const srcJson = JSON.stringify(srcArr);
            res.end(srcJson);
        });
}).listen(5000);