const fs = require("fs");

const writeToFile = (fileContent) => {
    fs.writeFile("contacts.json", fileContent, (err) => {
        if (err) {
            return console.log("err", err.message);
        }
        console.log("file created");
    });
}
const readFromFile = (fileName) => {
    try {
        return fs.readFileSync(fileName, 'utf-8');
    }
    catch (ex) {
        console.error("Error: " + ex.message);
    }
}

module.exports = {
    writeToFile,
    readFromFile
};