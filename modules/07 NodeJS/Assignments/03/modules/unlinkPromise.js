const fs = require('fs');

function unlinkPromise(){
    return Promise( (result,reject) => {

        try {
        fs.unlink(path, (error)=> {
              reject(error);

              result(`file:${path} deleted`);
        })
        }

        catch(ex){
            reject(`Error: ${ex}`);
        }
    })
}

module.exports = unlinkPromise;