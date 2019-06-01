const url = require('url');
const express = require('express');
const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const app = express()

const port = process.env.PORT || 8000;

app.all('*', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});



app.get('/', (req, res) => {
    const query = url.parse(req.url, true).query;

    const googleImagesUrl = `https://www.google.com/search?q=${query.search}
                            &hl=iw&source=lnms
                            &tbm=isch&sa=X
                            &ved=0ahUKEwjZy_yml8jiAhWPRxUIHTVcDvsQ_AUIESgC&biw=1680&bih=939`;

    request(googleImagesUrl, (err, response, body) => {
        if(err) {
            console.log(`Error: ${err}`);
        }
        console.log('statusCode:', response && response.statusCode);
        const dom = new JSDOM(body)
        const imgLst =  Object.values( dom.window.document.querySelectorAll("img"))
                                     .filter((img,index) => index < 9)
                                     .map(img => img.src);
        res.end(JSON.stringify(imgLst));
    })
})



app.listen(port, () => console.log(`server running on port ${port}`));



