const fileSystem = require('fs');

const writeFile = (str,fileName) => {
    fileSystem.writeFile(fileName, str, (error) => {
        if (error) {
            return console.log("Error: " + error);
        };
        console.log("File was created");
    })
};

module.exports = writeFile;