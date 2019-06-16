const fs = require('fs');

function readFilePromise(filename) {
    const p = new Promise ( (res, rej) => {
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
    return p;
}

module.exports = { readFilePromise };