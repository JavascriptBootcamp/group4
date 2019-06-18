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

function writeFilePromise(data) {
    return new Promise ((res, rej) => {
        try{
            fs.writeFile("found_files.txt", data, (error) => {
                if (error) rej(`Error: ${error}`);
                res(data);
            })
        }
        catch(ex) {
            rej(`Error: ${ex}`);
        }
    });
}

function appendFilePromise(filename, appendData) {
    return new Promise ((res, rej) => {
        try{
            fs.appendFile(filename, appendData, (error) => {
                if (error) rej(`Error: ${error}`);
    
                res(appendData);
            })
        }
        catch(ex) {
            rej(`Error: ${ex}`);
        }
    });
}

function unLinkFilePromise(filename) {
    return new Promise ((res, rej) => {
        try{
            fs.readFile(filename, (error) => {
                if (error) rej(`Error: ${error}`);
    
                res(`Delete is successful`);
            })
        }
        catch(ex) {
            rej(`Error: ${ex}`);
        }
    });
}

function readFileIfExists (path) {

    return new Promise ((res, rej) => {
        try{
            
            if (!fs.existsSync(path)) {
                rej (false);
            }
            res(true);
        }
        catch(ex) {
            rej(`Error: ${ex}`);
        }
    });
}



module.exports = { readFilePromise, writeFilePromise, appendFilePromise ,unLinkFilePromise , readFileIfExists  };