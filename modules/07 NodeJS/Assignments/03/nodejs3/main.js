const fileSystem = require('./modules/fs-promise');
const fileName = 'recipe.json';
const recipe = {
    title: "churros",
    ingredients: ["water", "white sugar", "flour", "oil"],
    timeCooking: "20 minutes",
    srcRating: "https://media.istockphoto.com/vectors/fivestar-rating-icon-vector-id922744956?s=170x170"
};

//Promise Execution
/*
fileSystem.writeFilePromise(fileName, JSON.stringify(recipe))
    .then(data => console.log(data))
    .catch(error => console.error(error));

fileSystem.readFilePromise(fileName)
    .then(data => console.log(data))
    .catch(error => console.error(error));

fileSystem.appendFilePromise(fileName, "some text for testing append")
    .then(data => console.log(data))
    .catch(error => console.error(error));

fileSystem.readFileIfExists(fileName)
    .then(data => console.log(data))
    .catch(error => console.error(error));

fileSystem.unlinkFilePromise(fileName)
    .then(data => console.log(data))
    .catch(error => console.error(error));

fileSystem.readFileIfExists(fileName)
    .then(data => console.log(data))
    .catch(error => console.error(error));
*/

//async-await Execution

(async () => {
    try {
        console.log("Write file recipe.json");
        let data = await fileSystem.writeFilePromise(fileName, JSON.stringify(recipe));
        console.log(data);

        console.log("Read file recipe.json");
        data = await fileSystem.readFilePromise(fileName);
        console.log(data);

        console.log("Append some text to recipe.json");
        data = await fileSystem.appendFilePromise(fileName, "some text for testing append");
        console.log(data);

        console.log("Read file if exists before the delete");
        data = await fileSystem.readFileIfExists(fileName);
        console.log(data);

        console.log("Delete file recipe.json");
        data = await fileSystem.unlinkFilePromise(fileName);
        console.log(data);

        console.log("Read file if exists after the delete");
        data = await fileSystem.readFileIfExists(fileName);
        console.log(data);

    } catch (err) {
        console.log(err);
    }
})()
