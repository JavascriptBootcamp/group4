const filesystem = require("./module/prom-fs.js") 

const readFilePromise= async filename =>{
    try{
        const fileContent = await
        filesystem.readFilePromise(filename);
        console.log(fileContent);
    }
    catch(err){
        console.error(err);
    }
}
const writeFilePromise= async (filename,content) =>{
    try{
        const respone = await
        filesystem.writeFilePromise(filename,content);
        console.log(respone);
    }
    catch(err){
        console.error(err);
    }
}

const appendFilePromise= async (filename,content) =>{
    try{
        const respone = await
        filesystem.appendFilePromise(filename,content);
        console.log(respone);
    }
    catch(err){
        console.error(err);
    }
}

const unlinkFilePromise= async filename =>{
    try{
        const respone = await
        filesystem.unlinkFilePromise(filename);
        console.log(respone);
    }
    catch(err){
        console.error(err);
    }
}

const readFileIfExistsPromise= async filename =>{
    try{
        const fileContent = await
        filesystem.readFilePromise(filename);
        console.log(fileContent);
    }
    catch(err){
        console.error(err);
    }
}

unlinkFilePromise('recipe.json')