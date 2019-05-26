const fs = require("fs");
const writeFileProm = require('./modules/writeFile-promise');
const readFileProm = require('./modules/readFile-promise');
const appendFileProm = require('./modules/appendFile-promise');
const unlikeFileProm = require('./modules/unlink-promise');
const recipe = {
    name: "Salad", ingredients: ["Tomato", "Cucumber", "onion"], time: "15 Min"
};
const toJsonFile = [recipe];
const fileName = "recipe.json";

fs.stat(fileName, (err, stats) => {
    if (err) {
        //Promise
        writeFileProm(fileName, "")
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    else {
        toJsonFile.push({ Name: "shai" });
        appendFileProm(fileName, JSON.stringify(toJsonFile))
            .then(res => console.log(res))
            .catch(err => console.log(err));

        readFileProm(fileName)
            .then(res => console.log(res))
            .catch(err => console.log(err));

        unlikeFileProm(fileName)
            .then(res => console.log(res))
            .catch(err => console.log(err));


    }
})