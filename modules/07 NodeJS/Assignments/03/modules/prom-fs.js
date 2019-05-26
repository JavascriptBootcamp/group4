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

function writeFilePromise(filename, data) {
    return new Promise ( (res, rej) => {
        try{
            fs.writeFile(filename, data, (error) => {
                if (error) rej(`Error: ${error}`);
                res(`${filename} write operation was successful`);
            })
        }
        catch(ex) {
            rej(`Error: ${ex}`);
        }
    });
}

function appendFilePromise(filename, data) {
    return new Promise ( (res, rej) => {
        try{
            fs.appendFile(filename, data, (error) => {
                if (error) rej(`Error: ${error}`);
                res(`${filename} append operation was successful`);
            })
        }
        catch(ex) {
            rej(`Error: ${ex}`);
        }
    });
}

function unlinkFilePromise(filename) {
    return new Promise ( (res, rej) => {
        try{
            fs.unlink(filename, (error) => {
                if (error) rej(`Error: ${error}`);
                res(`${filename} Deletion operation was successful`);
            })
        }
        catch(ex) {
            rej(`Error: ${ex}`);
        }
    });
}

function readFileIfExistsPromise(filename) {
    return new Promise ( async (res, rej) => {
        try {
            if (fs.existsSync(filename)) {
              //file exists
              try {
                let data = await readFilePromise(filename);
                res(data);
              } 
              catch (ex) {
                  //catch readFilePromise error
                rej(`Error: ${ex}`);
              }
            }
        } 
        catch(ex) {
            //catch fs.existsSync error
            rej(`Error: The specified file does not exist - ${ex}`);
        }
    });
}

module.exports = { readFilePromise, writeFilePromise, appendFilePromise, unlinkFilePromise, readFileIfExistsPromise};