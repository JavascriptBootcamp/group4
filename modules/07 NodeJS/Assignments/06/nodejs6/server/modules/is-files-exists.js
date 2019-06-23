const fs = require('fs');
const path = require('path');

function isFilesExists(files) {
    let existsFiles = "";
    for (let file of files) {
        try {
            if (fs.existsSync(path.join(__dirname, '/../documents', file))) {
                existsFiles += `${file} \n`;
            }
        } catch (err) {
            console.error(err)
        }
    }
    if (existsFiles === "") {
        existsFiles = 'No files was found';
    }
    return existsFiles;
}

module.exports = isFilesExists;