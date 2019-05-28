const fs = require('fs');

const readFile = (fileName) => {
    try {
        const fileContent = fs.readFileSync(fileName, 'utf-8');
        console.log("File Content: " + fileContent);
        return fileContent.toString();
    }
    catch (ex) {
        console.error("Error: " + ex.message);
    }

};

module.exports = readFile;

