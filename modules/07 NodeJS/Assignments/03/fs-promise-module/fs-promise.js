const fs = require('fs');

function writeFilePromise(filePath,data) {
    return new Promise ( (res, rej) => {
        try{
            fs.writeFile(filePath, data, (error) => {
                if (error) rej(`Error: ${error}`);
                res("Successfully wroted!");
            })
        }
        catch(ex) {
            rej(`Error: ${ex}`);
        }
    });
}

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

function appendFilePromise(filename,content) {
    return new Promise ( (res, rej) => {
        try{
            fs.appendFile(filename, content, (error, data) => {
                if (error) rej(`Error: ${error}`);
                res("Successfully appended!");
            })
        }
        catch(ex) {
            rej(`Error: ${ex}`);
        }
    });
}

function unlinkPromise(filename) {
    return new Promise ( (res, rej) => {
        try{
            fs.unlink(filename, (error, data) => {
                if (error) rej(`Error: ${error}`);
                res("Successfully removed!");
            })
        }
        catch(ex) {
            rej(`Error: ${ex}`);
        }
    });
}

function readFileIfExistsPromise(filename) {
    return new Promise ( (res, rej) => {
        try{
            if(!fs.existsSync(filename))
                rej(`Error: The specified file does not exist`);
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
module.exports = { writeFilePromise, readFilePromise, appendFilePromise, unlinkPromise, readFileIfExistsPromise };