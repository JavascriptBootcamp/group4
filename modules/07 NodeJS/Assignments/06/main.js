const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
    if (req.method === "POST") {
        const filesList = req.body.files;
        console.log(filesList);
        next();
    }
});

function isExixtsWrite(files) {
    let fileExists = "";

    for (let fileName of files) {
        if (fs.existsSync(path.join(`documents`, fileName))) {
            fileExists += `${fileName} \n`;
        }
    }
    
    if (fileExists === "")
        fileExists = "No files";
    console.log(`isExists: ${fileExists}`);

    writeToFile(fileExists);
    return fileExists;

};


function writeToFile(filesExists) {
    const foundFiles = "found_files.txt";
    let writeStream = fs.createWriteStream(foundFiles);
    writeStream.write(filesExists);
}

app.post('/file', (req, res) => {
    try {
        let files = isExixtsWrite(req.body.files);
        // res.end( JSON.stringify(files));
        res.send(JSON.stringify(files));
    }
    catch (error) {
        console.log(error);
        res.status(500);
    }
});


app.listen(5000, console.log("server is running in port 5000"));