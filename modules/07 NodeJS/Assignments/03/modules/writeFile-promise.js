const fs = require('fs');

function writeFilePromise(filename, data) {
    return new Promise((res, rej) => {
        try {
            fs.writeFile(filename, data, 'utf8', (error) => {
                if (error) rej(`Error: ${error}`);

                res("The file has been saved!");
            })
        }
        catch (ex) {
            rej(`Error: ${ex}`);
        }
    });
}

module.exports = writeFilePromise;