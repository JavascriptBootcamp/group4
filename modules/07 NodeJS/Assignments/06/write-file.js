const fileSystem = require('fs');
const fileFormat = "txt";
const fileName = "found_files";

 const writeFile = str => {
    fileSystem.appendFile(`${fileName}.${fileFormat}`, str+'\n', (error) => {
        if (error) {
            return console.log("Error: " + error);
        };
        console.log("message was added");
    })
};

 module.exports = writeFile; 