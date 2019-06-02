const fileSystem = require('fs');

const writeFile = (data, fileName) => {
    fileSystem.writeFile(fileName, data, (error) => {
        if (error) {
            return console.log("Error: " + error);
        }
        console.log("File was created");
    })
};

module.exports = writeFile;