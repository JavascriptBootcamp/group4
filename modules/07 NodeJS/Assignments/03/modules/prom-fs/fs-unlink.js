const fs = require('fs');

function unlinkFile(fileName){
    
    return new Promise((res,rej)=>{
    
        fs.unlink(fileName,(error)=>{
    
            if(error)rej(`error: ${error}`);
    
            res(`file was deleted`);
    
        });
    });
    
    }
    
    
    module.exports = unlinkFile;