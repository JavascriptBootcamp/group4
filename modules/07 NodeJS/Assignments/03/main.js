const fileSystem = require('./modules/prom-fs');
const fileName = "result.txt";


const writeFilePromise = async ()  => {
    try{
        await fileSystem.writeFile ("Yupi-Kai-Yey");
       
    }
    catch(err) {
        console.error(err);
    }
}



const unlinkPromise = async ()  => {
    try{
        await fileSystem.unlink (fileName);
    }
    catch(err) {
        console.error(err);
    }
}




const readFilePromise = async (fileName)  => {
    try{
        const fileContent = await fileSystem.readFile(fileName);
        console.log(fileContent);
    }
    catch(err) {
        console.error(err);
    }
}



const readFileexPromise = async (fileName)  => {
    try{
        const fileContent = await fileSystem.readFileIfExists(fileName);
        console.log(fileContent);
    }
    catch(err) {
        console.error(err);
    }
}

writeFilePromise();
readFileexPromise(fileName);
readFilePromise(fileName);
unlinkPromise(fileName);