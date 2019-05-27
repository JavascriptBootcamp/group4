const fs = require('fs');
const writeToFile = (fileName,str)=>{
    console.log(fileName);
    fs.writeFile(fileName,str,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Successful!");
        }
    })
}
module.exports = writeToFile;