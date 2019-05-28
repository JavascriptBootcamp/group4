const fs = require('fs');
const readFile = require('./fs-readFile');

function readFileIfExists(fileName) {

    return new Promise((res, rej) => {

      fs.access(fileName,(error)=>{
          if(error){
            rej("Error: The specified file does not exist");
          }
          else
          readFile(fileName).then(file=>res(file)).catch(error=>rej(error))  
      });

    });
}



module.exports = readFileIfExists;