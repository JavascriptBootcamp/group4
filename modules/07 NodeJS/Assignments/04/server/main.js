const request = require("request");
const http = require("http");
const rp = require("request-promise");
const url = require("url");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");

http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "*");

    var query = url.parse(req.url, true).query;
    const subjectOfPics = query.subjectOfPics;
console.log(subjectOfPics);
    const URL = `https://www.google.com/search?q=${subjectOfPics}&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjHj8Lo4L_iAhWoRhUIHcERDBQQ_AUIDigB&biw=1517&bih=694`;

    rp(URL).then(html => {
     
      const dom = new JSDOM(html);
      
       let st = [];
       const IMG_LENGTH = 8;
       const qs = dom.window.document.querySelectorAll('.images_table [src]');
       for(let i = 0 ; i < IMG_LENGTH ;i++) {
            st.push(qs[i].getAttribute('src'));
       }
     // fs.writeFile('index.html',st ,(err)=>{}); 
     //console.log(st);
      res.end(JSON.stringify(st));
    });
  })
  .listen(5000);
