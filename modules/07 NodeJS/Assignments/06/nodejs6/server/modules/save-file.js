const fs = require('fs');

const saveFile = (request, response, next) => {
    if (request.method === "POST") {
        if (response.locals.requestFiles) {
            foundFiles = response.locals.requestFiles;
            const fileName = 'found_files.txt';
            const file = fs.createWriteStream(fileName);
            file.write(foundFiles);
            file.end();
        }
    }
    next();
};

module.exports = saveFile;