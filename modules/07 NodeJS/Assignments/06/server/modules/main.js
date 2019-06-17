const cors = require('cors');
const express = require('express');
const fs = require('fs');
const { promisify } = require('util');

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
        const promiseWriteToFile = fs.createWriteStream('../files/found_files.txt')
        for (let file of files) {
            if (fs.existsSync(`../files/${file}`)) {
                promiseWriteToFile.write(file + '\n')
                foundFiles.push(file);
            }
        }
        promiseWriteToFile.end();
        response.json({
            status: "OK",
            foundFiles: foundFiles
        });
    }
    catch (ex) {
        console.log(ex);
        response.end("Error");
    }
})




app.post('/:fileName', async (req, res) => {
    const matchingFiles = [];
    const {fileName} = req.params;
    const folderPath = '../files';
    const files = fs.readdirSync(folderPath);
    for(let file of files){
        if(file.includes(fileName)){
            matchingFiles.push(file);
        }
    }
    res.json(matchingFiles);
})



app.listen(5000, () => console.log("server is runnig in port 5000"))