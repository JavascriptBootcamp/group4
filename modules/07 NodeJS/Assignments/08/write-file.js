const fileSystem = require('fs');
const fileFormat = "csv";
const fileName = "result";

const writeFile = str => {
    fileSystem.appendFile(`${fileName}.${fileFormat}`, str+'\n', (error) => {
        if (error) {
            return console.log("Error: " + error);
        };
        console.log("message was added");
    })
};

module.exports = writeFile;