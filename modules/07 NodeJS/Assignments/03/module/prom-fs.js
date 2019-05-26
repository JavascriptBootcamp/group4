const fs = require('fs')

function readFilePromise(filename){
    return new Promise ((res,rej)=>{
        fs.readFile(filename,'utf-8',(error,data)=>{
            if(error) rej(`Error:${error}`)
            res (data);
        })
    });
}
function writeFilePromise(filename,content){
    return new Promise ((res,rej)=>{
        fs.writeFile(filename,content,(error)=>{
            if(error) rej(`Error:${error}`)
            res ("write Succes")
        })
    })
}
function appendFilePromise(filename,content){
    return new Promise ((res,rej)=>{
        fs.appendFile(filename,content,(error)=>{
            if(error) rej(`Error:${error}`)
            res ("Update Succses")
        })
    })
}
function unlinkFilePromise(filename){
    return new Promise ((res,rej)=>{
        fs.unlink(filename,(error)=>{
            if(error) rej(`Error:${error}`)
            res ("File Deleted")
        })
    })
}

function readFileIfExistsPromise(filename){
    return new Promise ((res,rej)=>{
        fs.access(filename,fs.constants.F_OK,(error)=>{
            if(error)rej(`Error:${error}`)
            res (readFilePromise(filename))
        })
    })
}

module.exports = {readFilePromise,writeFilePromise,appendFilePromise,unlinkFilePromise,readFileIfExistsPromise}