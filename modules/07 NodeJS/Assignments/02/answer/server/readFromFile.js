const fs = require('fs');
const readFromFile = (filePath)=>{
    return fs.readFileSync(filePath).toString();
}
module.exports = readFromFile;