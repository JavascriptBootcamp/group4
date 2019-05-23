const fs = require('fs');
const writeToFile = (str)=>{
    fs.writeFile("output.js",str,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Successful!");
        }
        // console.log(str);
    })
}

module.exports = writeToFile;