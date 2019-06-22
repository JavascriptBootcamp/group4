const express = require('express');
const fs = require('fs');
const path = require('path'); 
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.use((req,res,next)=>{
    if(req.method === "POST"){
        const filesList = req.body.files;
        console.log(filesList);
        next();
    }
});

app.post('/file',(req,res)=>{
    try{
        const files = req.body.files;
        const foundFiles = searchForFiles(files);
        writeToFile(foundFiles);
        res.send(foundFiles);
    }
    catch{
        console.log(error);
        res.sendStatus(500);
    }
})

function searchForFiles(files){
    let foundFiles = "";
    for(let file of files){
        let currentPath = path.join(__dirname,'documents',file);
        if(fs.existsSync(currentPath)){
            foundFiles+= `${file} \n`
        }
    }
    return foundFiles
}

function writeToFile(foundFiles){
    let writeStream = fs.createWriteStream("found_files.text");
    writeStream.write(foundFiles);
}

app.listen(port,()=>console.log(`listening on port ${port}`))