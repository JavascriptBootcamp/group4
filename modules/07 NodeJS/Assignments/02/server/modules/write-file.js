const fs = require('fs');

const writeFile = str => {
    fs.writeFile('contacts.json', str, (error) => {
        if(error)  return console.log("Error: " + error);
        console.log("contacts.json file was created");
    })
};

module.exports = writeFile;