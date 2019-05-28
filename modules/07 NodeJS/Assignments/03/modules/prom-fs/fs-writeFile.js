const fs = require('fs');

function writeFile(fileName,info){

return new Promise((resolve,reject)=>{

fs.writeFile(fileName,info,(error)=>{

if(error)reject(`error: ${error}`);

resolve(`file was writed`);

})

})


}


module.exports = writeFile;