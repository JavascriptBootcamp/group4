const cors = require('cors');
const express = require('express');
const fs = require('fs');
const { promisify } = require('util');
var path = require('path');

const app = express();

app.use(express.json());
app.use(cors());

app.use((request, response, next) => {

    if(request.method === "POST" && request.body.files){
        const { files } = request.body;
        console.log(files);
    }
    next();
})


app.post('/', (request, response) => {

    const foundFiles = [];
    const { files } = request.body;
    try {
        const promiseWriteToFile = fs.createWriteStream(path.join('..','files','found_files.txt'))
        for (let file of files) {
            if (fs.existsSync(`../files/${file}`)) {
                promiseWriteToFile.write(file + '\n')
                foundFiles.push(file);
            }
        }
        promiseWriteToFile.end();
        responseJson(response,{status: "OK",foundFiles: foundFiles});
    }
    catch (ex) {
        console.log(ex);
        responseJson(response,{status: "Error"});
    }
})


function responseJson(res,data){
    res.json(data);
}



app.listen(5000, () => console.log("server is runnig in port 5000"))