const promFS = require('./modules/prom-fs');
const url = "recipe.json";
const info = "Stage 2";
const append = '{ "hello" : "World"}';
const append2 = "Last append";

// read file Promise
function executeReadFilePromise(url) {
    promFS.readFilePromise(url)
        .then(content => {
            console.log("readFilePromise: ", content);
        })
        .catch(error => {
            console.error(`Error in readFilePromise: ${error}`);
        });
}

// read file in async await
async function readFileAsyncAwait(url) {
    try {
        const cont = await promFS.readFilePromise(url);
        console.log("readFileAsyncAwait: ", cont);
    }
    catch (error) {
        console.error(`Error readFileAsyncAwait: ${error}`);
    }
}

// write file Promise
function executeWriteFilePromise(url, info) {
    promFS.writeFilePromise(url, info)
        .then(newContent => {
            console.log("writeFilePromise: ", newContent);
        })
        .catch(error => {
            console.error(`Error writeFilePromise: ${error}`);
        });
}

// write file in async await
async function writeFileAsyncAwait(url, info) {
    try {
        const newContent = await promFS.writeFilePromise(url, info);
        console.log("writeFileAsyncAwait: ", newContent);
    }
    catch (error) {
        console.error(`Error writeFileAsyncAwait: ${error}`);
    }
}

// append file Promise
function executeAppendFilePromise(url, append) {
    promFS.appendFilePromise(url, append)
        .then(newContent => {
            console.log("appendFilePromise: ", newContent);
        })
        .catch(error => {
            console.error(`Error appendFilePromise: ${error}`);
        });
}

// append file in async await
async function appendFileAsyncAwait(url, append) {
    try {
        const newContent = await promFS.appendFilePromise(url, append);
        console.log("appendFileAsyncAwait: ", newContent);
    }
    catch (error) {
        console.error(`Error appendFileAsyncAwait: ${error}`);
    }
}

// append file Promise
function executeUnLinkFilePromise(url) {
    promFS.unLinkFilePromise(url)
        .then(newContent => {
            console.log("unLinkFilePromise: Deleted");
        })
        .catch(error => {
            console.error(`Error unLinkFilePromise: ${error}`);
        });
}

// append file in async await
async function unLinkFileAsyncAwait(url) {
    try {
        const newContent = await promFS.unLinkFilePromise(url);
        console.log("unLinkFileAsyncAwait: Deleted");
    }
    catch (error) {
        console.error(`Error unLinkFileAsyncAwait: ${error}`);
    }
}


function executeIsFileIfExists(url) {
    promFS.readFileIfExists(url)
        .then(content => {
            console.log(`The content of file name ${url} is: ${content}`);
        })
        .catch(error => {
            console.error(`The error is ${error}`);
        });
}

// executeReadFilePromise(url);
// readFileAsyncAwait(url);
// executeWriteFilePromise(url, info);
// writeFileAsyncAwait(url, info);
// executeAppendFilePromise(url, info);
// appendFileAsyncAwait(url, append);
// executeUnLinkFilePromise(url);
// unLinkFileAsyncAwait(url);

// executeIsFileIfExists(url);



