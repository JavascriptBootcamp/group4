const express = require('express');
const cors = require('cors');
const fs = require('fs');
const streamify = require('stream-array');

const outputFile = 'found_files.txt';
let reqFiles = [];

const app = express();

app.use(express.json()); // Middleware - for reading the BODY
app.use(cors());

app.use((req,res,next)=>{
    if(req.method === "POST"){
        const filesList = req.body;
        console.log(filesList.files.map(item=>item.trim()));
        next();
    }
});

app.post('/file',(req,res)=>{
    const filesList = req.body;
    const status = getReqFiles(filesList.files);
    const statusCode = status === "OK" ? 200 : 500;
    res.statusCode = statusCode;
    res.end(JSON.stringify(status));
});

function getReqFiles(checkForFiles){
    const files = fs.readdirSync('../documents');
    let specificFiles = [];
    for(let i=0;i<checkForFiles.length;i++)
        if(files.indexOf(checkForFiles[i].trim()) !== -1)
            specificFiles.push(checkForFiles[i]);
    if( specificFiles.length === 0 )
        return "Error";
    const writeStream  = fs.createWriteStream(outputFile);
    streamify(specificFiles).pipe(writeStream);    
    return "OK";
    //fs.writeFileSync(outputFile,specificFiles.toString().replace(',',' '));
    }

app.listen(5000,()=>console.log("server is running in port 5000"));