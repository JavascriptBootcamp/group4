const fs = require('fs');
const path = require('path');
const fileFounds = "found_files.txt";

const writeToListFiles = (listOfFiles) => {
    let fileStream = fs.createWriteStream(fileFounds);
    for (let file of listOfFiles) {
        try {
            if (fs.existsSync(`documents/${file}`)) {
                fileStream.write(`${file}\n`);
            }
        } catch (err) {
            res.status(500).end("Error");
        }
    }
}
  
module.exports = {
    writeToListFiles
}