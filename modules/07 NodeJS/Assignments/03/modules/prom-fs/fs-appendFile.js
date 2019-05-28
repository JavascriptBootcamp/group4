const fs = require('fs');


function appendfile(fileName,info){

return new Promise((res,rej)=>{

    fs.appendFile(fileName,info,(error)=>{

        if(error)rej(`error: ${error}`);

        res(`file was updated`);

    });
});

}


module.exports = appendfile;