const fileSystem = require('./modules/prom-fs');
const fileName = "result.txt";

const writeFilePromise = async ()  => {
    try{
        await fileSystem.writeFile ("Yupi-Kai-Yey");
        // const fileContent = await fileSystem.readFilePromise(fileName);
        // console.log(fileContent);
    }
    catch(err) {
        console.error(err);
    }
}

// writeFilePromise();


const readFilePromise = async (fileName)  => {
    try{
        const fileContent = await fileSystem.readFile(fileName);
        console.log(fileContent);
    }
    catch(err) {
        console.error(err);
    }
}


// readFilePromise(fileName);

const a = fileSystem.readFileIfExists(fileName);
console.log(a);


