

var promFs = require('./prom-fs');
var someContent={
    "prop1":"val1"
};

(async () => {
    try {
        console.log("Read File()-------")
        let fileData = await promFs.readFilePromise('recipes.JSON');
        console.log(fileData);
        console.log("Write File()-------")
        let writeFile = await promFs.writeFile('myNewFile.txt',JSON.stringify(someContent));
        console.log(writeFile);
        console.log("append File()-------")
        let appendFile = await promFs.appendFile('myNewFile.txt','prop2:val2');
       console.log(appendFile);
          console.log("unlink File()-------")
        let unlinkFile= await promFs.unlink('myNewFile.txt','prop2:val2');
       console.log(unlinkFile);
        console.log("read if exist File()-------")
        let readFileIfExists= await promFs.readFileIfExists('myNewFile.txt','prop2:val2');
        console.log(readFileIfExists);
    }
    catch (error) {
        console.log(error);

    }
})();
