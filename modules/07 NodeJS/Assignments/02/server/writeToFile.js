const fs = require("fs");

const writeToFile = (fileContent) => {
    fs.writeFile("contacts.json", fileContent, (err) => {
        if (err) {
            console.log("err", err.message);
        }
        console.log("file created");
    });
}

module.exports = writeToFile;