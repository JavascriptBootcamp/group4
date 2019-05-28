const fs = require('fs');


function readFilePromise(filename) {
    return new Promise( (res, rej) => {
        try{
            fs.readFile(filename, 'utf-8', (error, fileContent) => {
                if (error) rej(`Error: ${error}`);
                res(`Reading from ${filename} was successful, its content is: ${fileContent}`);
            })
        }
        catch(ex) {
            rej(`Error: ${ex}`);
        }
    });
}


function readFileIfExistsPromise(filename) {
    return new Promise( (res, rej) => {
        try {
            if (fs.existsSync(filename)) {
              try {
                readFilePromise(filename);
              } 
              //catch readFilePromise error
              catch (ex) { 
                rej(`Error: ${ex}`);
              }
            }
            else {
                rej(`Error: The file "${filename}" doesn't exist`);
            }
        } 
        //catch fs.existsSync error
        catch(ex) {
            rej(`Error: ${ex}`);
        }
    });
}


// Rewrite content of the file
function writeFilePromise(filename, strToWrite) {
    return new Promise( (res, rej) => {
        try{
            fs.writeFile(filename, strToWrite, error => {
                if (error) rej(`Error: ${error}`);
                res(`Writing to ${filename} was successful`);
            })
        }
        catch(ex) {
            rej(`Error: ${ex}`);
        }
    });
}


// Append content to the file
function appendFilePromise(filename, strToAppend) {
    return new Promise( (res, rej) => {
        try{
            fs.appendFile(filename, strToAppend, error => {
                if (error) rej(`Error: ${error}`);
                res(`Append "${strToAppend}" to ${filename} was successful`);
            })
        }
        catch(ex) {
            rej(`Error: ${ex}`);
        }
    });
}


// Delete file
function unlinkFilePromise(filename) {
    return new Promise( (res, rej) => {
        try{
            fs.unlink(filename, error => {
                if (error) rej(`Error: ${error}`);
                res(`${filename} file has been deleted!`);
            })
        }
        catch(ex) {
            rej(`Error: ${ex}`);
        }
    });
}


module.exports = { 
    readFilePromise,
    readFileIfExistsPromise,
    writeFilePromise,
    appendFilePromise,
    unlinkFilePromise  
};
 