const fileSystem = require('fs');

const readFile = () => {
    fileSystem.readFile('contacts.json', 'utf-8', (error) => {
        if (error) {
            return console.log("Error: " + error);
        };
        console.log("File was readed");
    })
};

module.exports = readFile;