const fs = require('fs');

function readFile(fileName){

return new Promise((res,rej)=>{

fs.readFile(fileName,(error,data)=>{

if(error) rej(`error:${error}`);

res(data);

});

});


}


module.exports = readFile;