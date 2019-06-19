const fs = require('fs');
const fileFounds = "found_files.txt";

const writeToListFiles = async (listOfFiles) => {
    let fileStream = fs.createWriteStream(fileFounds);
    for (let file of listOfFiles) {
        try {
            if (await fs.existsSync(`documents/${file}`)) {
                 fileStream.write(`${file}\n`);
            }
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = {
    writeToListFiles
}