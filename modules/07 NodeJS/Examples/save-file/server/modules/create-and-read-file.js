const fileSystem = require('fs');

const fileName = 'output.txt';

const createAndReadFile = () => {
    fileSystem.writeFile(fileName, 'Moshiko is the king', (error) => {
        if (error) {
            return console.log("Error: " + error);
        };
        console.log("File was created");
    
        try {
            const fileContent = fileSystem.readFileSync(fileName, 'utf-8');
            console.log("File Content: " + fileContent);
        }
        catch (ex) {
            console.error("Error: " + ex.message);
        }
    });
}

module.exports = createAndReadFile;