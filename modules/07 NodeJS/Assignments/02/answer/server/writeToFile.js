const fs = require('fs');
const writeToFile = (str)=>{
    fs.writeFile("contacts.js",str,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Successful!");
        }
    })
}
module.exports = writeToFile;