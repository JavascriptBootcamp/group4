const writeFile = require('./modules/prom-fs/fs-writeFile');
const readFile = require('./modules/prom-fs/fs-readFile');
const appendFile = require('./modules/prom-fs/fs-appendFile');
const unlinkFile = require('./modules/prom-fs/fs-unlink');
const readFileIfExists = require('./modules/prom-fs/readFileIfExists ');



const writeToFile = async (fileName, info) => {

    try {

        const res = await writeFile(fileName,info);
        console.log(res)
    }
    catch (ex) {
        console.log(ex)
    }
}

writeToFile('index.js', "'We don’t see things as they are,");



const readFromFile = async fileName => {

    try {
        const res = await readFile(fileName);
        console.log("readFile:" + res)
    }
    catch (ex) {
        console.log(ex)
    }

}

readFromFile('index.js');


const appendToFile = async (fileName, info) => {

    try {
        const res = await appendFile(fileName, info);
        console.log(res)
    }
    catch (ex) {
        console.log(ex)
    }

}

appendToFile('index.js', "we see them as we are.'");




const readFile_IfExists = async (fileName) => {

    try {
        const res = await readFileIfExists(fileName);
        console.log("readFileIfExists:" + res)
    }
    catch (ex) {
        console.log(ex)
    }

}

readFile_IfExists('index.js');



const unlinkTheFile = async (fileName) => {

    try {
        const res = await unlinkFile(fileName);
        console.log(res)
    }
    catch (ex) {
        console.log(ex)
    }

}

//unlinkTheFile('index.js');