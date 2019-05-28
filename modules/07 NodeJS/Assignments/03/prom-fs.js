const fs = require('fs');


function writeFile(fileName, content) {
    return new Promise(function (res, rej) {

        fs.writeFile(fileName, content, function (err) {
            if (err) rej(err);
           res(fileName + ' Saved! its content : ' + content);
        });
    });


}
function readFilePromise(fileName) {
    return new Promise((res, rej) => {
        try {
            fs.readFile(fileName, (err, data) => {
                if (err) return "Error: The specified file does not exist";
                res("Read recipes.JSON File was successful! " + JSON.parse(data));
            });
        }
        catch (error) {
            rej(`Error: ${error}`);
        }
    });



}
function appendFile(fileName, content) {

    return new Promise((res, rej) => {
        try {
            fs.appendFile(fileName, content, (err) => {
                if (err) rej(err);
                res('Updated! with appendFile' + content);
            });
        }
        catch (error) {
            rej(error);
        }
    });
}
function unlink() {

    return new Promise(function (res, rej) {
try{
        fs.unlink('myNewFile.txt', function (err) {
            if (err) rej(err);
            res('File deleted!');
        });
    }
    catch (error) {
        rej(error);
    }
    });


}

function readFileIfExists(fileName) {
    return new Promise(function(res,rej){
try {
    if (fs.existsSync(fileName)) {
        fs.readFile(fileName,(err,data)=>{
                if(err) rej(err);
                res(JSON.parse(data));
        })
    }
    else
    rej("Error: The specified file does not exist");
  } catch(err) {
    console.error(err)
  }

});
}


module.exports = { readFilePromise, appendFile, writeFile,unlink ,readFileIfExists};
