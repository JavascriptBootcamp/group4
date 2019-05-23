const fileSystem = require('fs');

const writeFile = str => {
    fileSystem.writeFile('result.txt', str, (error) => {
        if (error) {
            return console.log("Error: " + error);
        };
        console.log("File was created");
    })
};

module.exports = writeFile;