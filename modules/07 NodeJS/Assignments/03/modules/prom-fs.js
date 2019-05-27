const fs = require('fs');

function readFilePromise(filename) {
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

function writeFilePromise(path, content) {
    return new Promise((res, rej) => {
        try {
            fs.writeFile(path, content, (error) => {
                if (error) rej(`Error: ${error}`);

                res("success write to file");
            })
        }
        catch (ex) {
            rej(`Error: ${ex}`);
        }
    });
}

function appendFilePromise(path, content) {
    return new Promise((res, rej) => {
        try {
            fs.appendFile(path, content, (error) => {
                if (error) rej(`Error: ${error}`);

                res("success append content to file");
            })
        }
        catch (ex) {
            rej(`Error: ${ex}`);
        }
    });
}

function unlinkPromise(path) {
    return new Promise((res, rej) => {
        try {
            fs.unlink(path, (error) => {
                if (error) rej(`Error: ${error}`);

                res("file deleted");
            })
        }
        catch (ex) {
            rej(`Error: ${ex}`);
        }
    });
}
function readFileIfExists(path) {
    return new Promise((res, rej) => {
        try {
            fs.access(path, fs.F_OK, (err) => {
                if (err) {
                    console.error("file not exists")
                }
                fs.readFile(path, 'utf-8', (error, data) => {
                    if (error) rej(`Error: ${error}`);
                    res(data);
                })
            })
        }
        catch (ex) {
            rej(ex);
        }
    });
}



module.exports = {
    readFilePromise,
    writeFilePromise,
    appendFilePromise,
    unlinkPromise,
    readFileIfExists
};