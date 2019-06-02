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

// fs.stat(fileName, (err, stats) => {
//     if (err) {
//         //Promise
//         writeFileProm(fileName, "")
//             .then(res => console.log(res))
//             .catch(err => console.log(err));
//     }
//     else {
//         toJsonFile.push({ Name: "shai" });
//         appendFileProm(fileName, JSON.stringify(toJsonFile))
//             .then(res => console.log(res))
//             .catch(err => console.log(err));

//         readFileProm(fileName)
//             .then(res => console.log(res))
//             .catch(err => console.log(err));

//         unlikeFileProm(fileName)
//             .then(res => console.log(res))
//             .catch(err => console.log(err));


//     }
// })
fs.stat(fileName, async (err, stats) => {
    if (err) {
        try {
            const res = await writeFileProm(fileName, "");
            console.log(res);
        } catch (error) {
            console.error(err);
        }
    }
    else {
        toJsonFile.push({ Name: "shai" });
        try {
            const res = await appendFileProm(fileName, JSON.stringify(toJsonFile));
            console.log(res);
        } catch (error) {
            console.error(err);
        }
        try {
            const res = await readFileProm(fileName);
            console.log(res);
        } catch (error) {
            console.error(err);
        }
        try {
            const res = await unlikeFileProm(fileName);
            console.log(res);
        } catch (error) {
            console.error(err);
        }
    }
})