const fs = require("fs");

const getfiles = () => {
    let arrFiles = [];
    let files = fs.readdirSync('../server/tableFiles');
    for (var i in files) {
        if (i) {
            arrFiles.push(files[i].split('_')[1])
        }
    }
    return arrFiles;
}

const writeToFile = (fileNumber, fileContent) => {
    fs.writeFile("../server/tableFiles/contacts_" + fileNumber + ".json", fileContent, (err) => {
        if (err) {
            return console.log("err", err.message);
        }
        console.log("file created");
    });
}
const readFromFile = (fileName) => {
    try {
        return fs.readFileSync("tableFiles/" + fileName, 'utf-8');
    }
    catch (ex) {
        console.error("Error: " + ex.message);
    }
}

module.exports = {
    writeToFile,
    readFromFile,
    getfiles
};