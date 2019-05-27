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

function readFileIfExists(filename) {
    return new Promise ( (res, rej) => {
        try{
            fs.access(filename,fs.F_OK, (error, data) => {
                if (error)rej(`Error: ${error}`);
                
                res(data);
            })
        }
        catch(ex) {
            rej(`Error: The specified file does not exist: ${filename}`);
        }
    });
}

function writeFilePromise(filename,data) {
    return new Promise ( (res, rej) => {
        try{
            fs.writeFile(filename,data, 'utf-8', (error, data) => {
                if (error) rej(`Error: ${error}`);
    
                res(data);
            })
        }
        catch(ex) {
            rej(`Error: ${ex}`);
        }
    });
}
function appendFilePromise(filename,data) {
    return new Promise ( (res, rej) => {
        try{
            fs.appendFile(filename,data, 'utf-8', (error, data) => {
                if (error) rej(`Error: ${error}`);
    
                res(data);
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
            fs.unlink(filename, (error, data) => {
                if (error) rej(`Error: ${error}`);
    
                res(data);
            })
        }
        catch(ex) {
            rej(`Error: ${ex}`);
        }
    });
}

module.exports = { readFilePromise,writeFilePromise,unlinkFilePromise,appendFilePromise,readFileIfExists };