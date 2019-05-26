const fs = require('fs');

function unlikePromise(filename) {
    return new Promise((res, rej) => {
        try {
            fs.unlink(filename, (error) => {
                if (error) rej(`Error: ${error}`);

                res("File Was Deleted!");
            })
        }
        catch (ex) {
            rej(`Error: ${ex}`);
        }
    });
}

module.exports = unlikePromise;