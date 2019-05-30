// const request = require('request');
const requestPromise = require('./modules/request-promise');
const fileSystem = require('./modules/fs-promise');
const url = 'http://www.google.com';

// Callback
// request(url, (error, response, body) => {
//     if (error) return console.error(`Error: ${error}`);

//     console.log('body:', body);
// });

// 

// Promise
// requestPromise(url)
// .then( b => {
//     console.log("Body:");
//     console.log(b);
// })
// .catch( error => console.error(error) );

// async-await
// async function executeRequestPromise(url) {
//     try{
//         const b = await requestPromise(url);
//         console.log(b);
//     }
//     catch(error) {
//         console.error(error);
//     }
// }

// (async ()=> {
//     await executeRequestPromise(url);
//     console.log("Moshiko is the king");
// })();

// fs-promise example
// Promise
// fileSystem.readFilePromise('index.html')
// .then( fileContent => console.log(fileContent) )
// .catch( error => console.error(error) );
// async function readFilePromise(fileName) {

// }

// const readFilePromise = async fileName => {
async function readFilePromise(fileName){
    try{
        const fileContent = await fileSystem.readFilePromise(fileName);
        console.log(fileContent);
    }
    catch(err) {
        console.error(err);
    }
}
readFilePromise();