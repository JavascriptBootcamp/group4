const fileSystem = require('fs');

const readFile = fileName => {
    return fileSystem.readFileSync(fileName, 'utf-8');
};

module.exports = readFile;