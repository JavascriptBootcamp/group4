const fs = require('fs');
const readFile = require('./fs-readFile.js');

function readFileIfExists(fileName){
    
    return new Promise((res,rej)=>{
    
        fs.exists(fileName,(isFileExist)=>{
    
            if(isFileExist){

             readFile(fileName).then(file=>res(file)).catch(error=>rej(error))  

            }
    
            rej("Error: The specified file does not exist");
    
        });
    });
    
    }
    
    
    module.exports = readFileIfExists ;