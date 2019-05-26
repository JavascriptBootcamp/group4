const fs = require('fs');

function appendFilePromise(filename, data) {
    return new Promise((res, rej) => {
        try {
            fs.appendFile(filename, data, "utf8", (error) => {
                if (error) rej(`Error: ${error}`);

                res("The data was appended to file!");
            })
        }
        catch (ex) {
            rej(`Error: ${ex}`);
        }
    });
}

module.exports = appendFilePromise;