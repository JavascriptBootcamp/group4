const fs = require('fs');

function readFilePromise(filename) {
    return new Promise ( (res, rej) => {
        try{
            fs.readFile(filename, 'utf-8', (error, data) => {
                if (error) rej(`Error: ${error}`);
    
                res(data);
            })
        }
        catch(ex) {
            rej(`Error: ${ex}`);
        }
    });
}

module.exports = readFilePromise;