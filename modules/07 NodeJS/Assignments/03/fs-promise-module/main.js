const fsPromise = require('./fs-promise');

let a = {
    firstName: "Daniel",
    lastName: "Brosh",
    address: "Ashkelon"
}

// Promises
// fsPromise.writeFilePromise("./contact.json",JSON.stringify(a))
// .then(res=>console.log(res))
// .catch(err=>console.error(err));

// fsPromise.readFilePromise("./contact.json")
// .then(res=>console.log(res))
// .catch(err=>console.error(err));

// fsPromise.appendFilePromise("./contact.json",JSON.stringify(a))
// .then(res=>console.log(res))
// .catch(err=>console.error(err));

// fsPromise.unlinkPromise("./contact.json")
// .then(res=>console.log(res))
// .catch(err=>console.error(err));

// fsPromise.readFileIfExistsPromise("./contact.json")
// .then(res=>console.log(res))
// .catch(err=>console.error(err));


// Async - Await
const writeFilePromise = async (fileName,data) => {
    try{
        const res = await fsPromise.writeFilePromise(fileName,data);
        console.log(res);
    }
    catch(err) {
        console.error(err);
    }
}

const readFilePromise = async fileName => {
    try{
        const fileContent = await fsPromise.readFilePromise(fileName);
        console.log(fileContent);
    }
    catch(err) {
        console.error(err);
    }
}

const appendFilePromise = async (fileName,data) => {
    try{
        const res = await fsPromise.appendFilePromise(fileName,data);
        console.log(res);
    }
    catch(err) {
        console.error(err);
    }
}

const unlinkPromise = async fileName => {
    try{
        const res = await fsPromise.unlinkPromise(fileName);
        console.log(res);
    }
    catch(err) {
        console.error(err);
    }
}

const readFileIfExistsPromise = async fileName => {
    try{
        const res = await fsPromise.readFileIfExistsPromise(fileName);
        console.log(res);
    }
    catch(err) {
        console.error(err);
    }
}

// writeFilePromise("./contact.json",JSON.stringify(a));
// readFilePromise("./contact.json");
// appendFilePromise("./contact.json",JSON.stringify(a));
// readFileIfExistsPromise("./contact.json");
// unlinkPromise("./contact.json");


// fsPromise.readFilePromise("./contact.json")
// .then(res=>console.log(res))
// .catch(err=>console.error(err));

// fsPromise.appendFilePromise("./contact.json",JSON.stringify(a))
// .then(res=>console.log(res))
// .catch(err=>console.error(err));

// fsPromise.unlinkPromise("./contact.json")
// .then(res=>console.log(res))
// .catch(err=>console.error(err));

// fsPromise.readFileIfExistsPromise("./contact.json")
// .then(res=>console.log(res))
// .catch(err=>console.error(err));
