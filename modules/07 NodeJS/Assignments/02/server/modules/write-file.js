const fileSystem = require('fs');

const writeFile = table => {
    fileSystem.writeFile('contacts.json', table, (error) => {
        if (error) {
            return console.log("Error: " + error);
        };
        console.log("File was created");
    })
};

module.exports = writeFile;