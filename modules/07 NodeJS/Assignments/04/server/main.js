const http = require('http');
const url = require('url');
const findPicturesBySearch = require('./modules/findPictures');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

http.createServer(async function (req, res) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', '*');

    const query = url.parse(req.url, true).query;
    const searchName = query.searchName;
    console.log(searchName);
    const urlPath = `https://www.google.com/search?q=${searchName}&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjplr6RkcHiAhXJzKQKHUTRBRkQ_AUIDigB&biw=1366&bih=657`;
    try {
        const html = await findPicturesBySearch(urlPath);
        const dom = new JSDOM(html);
        const src_images_arr = Object.values(dom.window.document.querySelectorAll("img"))
            .filter((img, index) =>index<9).map(img=>img.src).slice(1);

        const src_images = JSON.stringify(src_images_arr);

        res.end(src_images);
    }
    catch (error) {
        console.log(error);
    }

}).listen(7000, '127.0.0.1')