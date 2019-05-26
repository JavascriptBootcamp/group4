// const request = require('request');
const fileSystem = require('./modules/fs-promise');
const url = 'http://www.google.com';

const readFilePromise = async fileName => {
    try{
        const fileContent = await fileSystem.readFilePromise(fileName);
        console.log(fileContent);
    }
    catch(err) {
        console.error(err);
    }
}
readFilePromise('index.html');

const readFileIfExists = async fileName => {
    try{
         await fileSystem.readFileIfExists(fileName);
        const fileContent =readFilePromise(fileName);
        console.log(fileContent);
    }
    catch(err) {
        console.error(err);
    }
}
readFileIfExists('index.html');

const writeFilePromise = async (fileName ,data)=> {
    try{
        const fileContent = await fileSystem.writeFilePromise(fileName,data);
        console.log(fileName,data);
    }
    catch(err) {
        console.error(err);
    }
}
writeFilePromise('index.html',"hi litalllllllllllll");


const unlinkFilePromise = async (fileName,data) => {
    try{
        const fileContent = await fileSystem.unlinkFilePromise(fileName);
        console.log(fileContent,data);
    }
    catch(err) {
        console.error(err);
    }
}
unlinkFilePromise('index.html',"hi litalllllllllllll");


const appendFilePromise = async fileName => {
    try{
        const fileContent = await fileSystem.appendFilePromise(fileName);
        console.log(fileContent);
    }
    catch(err) {
        console.error(err);
    }
}
appendFilePromise('index.html');