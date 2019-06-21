const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require("fs");
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors());

var foundFilesMessage = 'Found Fiels: \n';



app.use( (req, resp, next) => {
    if (req.method === 'POST') {
        const directoryPath = path.join(__dirname, 'documents');

        fs.readdir(directoryPath, (err, filesNames) => {
            if (err) return console.log('Unable to scan directory: ' + err);
    
            filesNames.forEach( fileName => {
                console.log(fileName);
            });     
        });
    } 
    
    next();
});


app.post('/file', (req, resp) => {
    writeFoundFiels(req, resp); 
});


function getFilesAccordingSearch(searchsArr) {
    const existingFiles = fs.readdirSync('./documents'); 
    foundFilesBySearch =[];
    let foundFilesMessage = '';

    for(let i =  0; i < existingFiles.length; i++) {
        for(let j = 0; j < searchsArr.length; j++) {
            if( existingFiles[i].includes(searchsArr[j].trim()) ) {
                foundFilesBySearch.push(existingFiles[i]);
                foundFilesMessage += existingFiles[i] + '\n'; 
            }
        }
    }

    const writeStream  = fs.createWriteStream('found_files.txt');
    writeStream.write(foundFilesMessage + '\n');
    writeStream.end();    

    return foundFilesBySearch;
}


function writeFoundFiels(req, resp) {
    const filesAccordingSearch = getFilesAccordingSearch(req.body.filesContains);
    const directoryPath = path.join(__dirname, 'documents');
    
    fs.readdir(directoryPath, (err, filesNames) => {
        if(err) resp.status(500).json({message: 'ERROR in operation of adding files'});
        resp.status(200).json({result: filesAccordingSearch});
            
        filesNames.forEach( fileName => {
            foundFilesMessage += fileName + '\n'; 
        });

        fs.mkdir('created-files', () => {
            let writeStream = fs.createWriteStream('./created-files/found_files.txt');
            writeStream.write(foundFilesMessage + '\n');
            writeStream.end();         
        });
    });

}


port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
