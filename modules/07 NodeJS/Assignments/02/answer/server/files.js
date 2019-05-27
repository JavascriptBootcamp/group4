const fs = require('fs');
var path = require('path');

const getAllFiles = function(dirPath,suffix){
    let allFiles = fs.readdirSync(dirPath);
    for(var i=0;i<allFiles.length;i++){
        var a = allFiles[i];
    }
    allFiles = allFiles.filter( i=> i.lastIndexOf("."+ suffix) === (i.length - (suffix.length +1)));
    return allFiles;
}
module.exports = getAllFiles;