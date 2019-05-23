// const http=require('http');
// const requestHandler = (req,res)=>{
//     res.sendFile('/index.html');
// }
// const server = http.createServer(requestHandler);

// server.listen(5000,(err)=>{
//     if(err){
//         return console.log('error',err);
//     }
//     console.log('server is running');
// })

var express = require('express');
var app = express();

var path = __dirname;
console.log(path);
var port = 5000;

app.use(express.static(path));
app.get('*', function(req, res) {
    res.sendFile(path + '/index.html');
});
app.listen(port);