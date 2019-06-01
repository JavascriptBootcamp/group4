const http = require('http');
const url = require('url');
const searchImgModule = require('./modules/searchImg');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

http.createServer(async function (req, res) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', '*');

    const query = url.parse(req.url, true).query;
    const search_img = query.search_img;
   
    const googleUrl = `https://www.google.co.il/search?safe=off&hl=en&tbm=isch&source=hp&biw=1242&bih=568&ei=fu_yXPr_EILYwAKk-oiADA&q=${search_img}`;
    try {
        const html = await searchImgModule(googleUrl);
        const dom = new JSDOM(html);

        const srcArray = Object.values(dom.window.document.querySelectorAll("img"))
            .filter((img, index) =>index<9).map(img=>img.src).slice(1);

        const srcImagesJson = JSON.stringify(srcArray);
        res.end(srcImagesJson);
    }
    catch (error) {
        console.log(error);
    }

}).listen(8000) 