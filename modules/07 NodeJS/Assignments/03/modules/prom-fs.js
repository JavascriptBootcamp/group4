const fs = require('fs');


function readFileIfExists(filename) {
    return new Promise((res, rej) => {
        try {
                fs.exists(filename, (exists) => {
                if (exists)
                    res(readFile(filename));
                else
                console.log (`Error: The specified file does not exist`);  
                })
            }
        catch (ex) 
        {
            rej(`Error:${ex}`);
        }
    })
}

function writeFile(str) {
    return new Promise((res, rej) => {
        try {
            fs.writeFile('result.txt', str, (error) => {
                if (error) rej(`Error: ${error}`);

                console.log('file was created');
            })
        }
        catch (ex) {
            rej(`Error: ${ex}`);
        }
    });
}


function readFile(filename) {
    return new Promise((res, rej) => {
        try {
            fs.readFile(filename, 'utf-8', (error, data) => {
                if (error) rej(`Error: ${error}`);

                res(data);
            })
        }
        catch (ex) {
            rej(`Error: ${ex}`);
        }
    });
}


function appendFile(filename, str) {
    return new Promise((res, rej) => {
        try {
            fs.appendFile(filename, str, 'utf-8', (error) => {
                if (error) rej(`Error: ${error}`);

                console.log('file saved');
            })
        }
        catch (ex) {
            rej(`Error: ${ex}`);
        }
    });
}


function unlink(filename) {
    return new Promise((res, rej) => {
        try {
            fs.unlink(filename, (error) => {
                if (error) rej(`Error: ${error}`);

                console.log('deleted');
            })
        }
        catch (ex) {
            rej(`Error: ${ex}`);
        }
    });
}






module.exports = { readFile, writeFile, appendFile, unlink, readFileIfExists };