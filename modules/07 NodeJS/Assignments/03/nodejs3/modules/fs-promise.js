const fs = require('fs');

function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(filename, 'utf-8', (error, data) => {
                if (error) reject(`Error: ${error}`);

                resolve(data);
            })
        }
        catch (ex) {
            reject(`Error: ${ex}`);
        }
    });
}

function writeFilePromise(fileName, data) {
    return new Promise((resolve, reject) => {
        try {
            fs.writeFile(fileName, data, (error) => {
                if (error) reject(`Error: ${error}`);

                resolve(`The file ${fileName} has been saved!`);
            })
        }
        catch (ex) {
            reject(`Error: ${ex}`);
        }
    });
}

function appendFilePromise(fileName, data) {
    return new Promise((resolve, reject) => {
        try {
            fs.appendFile(fileName, data, (error) => {
                if (error) reject(`Error: ${error}`);

                resolve(`The "data to append" was appended to file ${fileName}`);
            })
        }
        catch (ex) {
            reject(`Error: ${ex}`);
        }
    });
}

function unlinkFilePromise(fileName) {
    return new Promise((resolve, reject) => {
        try {
            fs.unlink(fileName, (error) => {
                if (error) reject(`Error: ${error}`);

                resolve(`The file ${fileName} successfully deleted.`);
            })
        }
        catch (ex) {
            reject(`Error: ${ex}`);
        }
    });
}

function readFileIfExists(fileName) {
    return new Promise((resolve, reject) => {
        try {
            if (fs.existsSync(fileName)) {
                //file exists
                try {
                    fs.readFile(fileName, 'utf-8', (error, data) => {
                        if (error) reject(`Error: ${error}`);

                        resolve(data);
                    })
                }
                catch (ex) {
                    reject(`Error: ${ex}`);
                }
            } else {
                reject(`The file ${fileName} does not exists.`);
            }
        }
        catch (ex) {
            reject(`Error: ${ex}`);
        }
    });
}

module.exports = { readFilePromise, writeFilePromise, appendFilePromise, unlinkFilePromise, readFileIfExists };