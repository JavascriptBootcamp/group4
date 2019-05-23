const fileSystem = require('fs');

const fileName = 'result.txt';

const ReadFile = () => {
 
        try {
            const fileContent = fileSystem.readFileSync(fileName, 'utf-8');
            console.log("File Content: " + fileContent);
        }
        catch (ex) {
            console.error("Error: " + ex.message);
        }
   
}

module.exports = ReadFile;