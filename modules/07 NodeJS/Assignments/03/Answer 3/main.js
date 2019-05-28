const promFs = require('./modules/prom-fs');

const recipeJSON = {
    "name": "Lemon Nana Life Water",
    "ingredients": [
        {
            "name": "Fresh Lemon",
            "quantity": "120gr"    
        },
        {
            "name": "Fresh Nana",
            "quantity": "3gr"
        },
        {
            "name": "Nature Water",
            "quantity": "240ml"
        }
    ],
    "timeOfCooking": "10 seconds"
};


// Testing promFs 
(async () => {
    try {
        console.log("\n\n");
        console.log("1. Write recipeJSON to recipe.json file:");
        let data = await promFs.writeFilePromise("recipe.json", JSON.stringify(recipeJSON));
        console.log(data,"\n");

        console.log("2. Read file recipe.json:");
        data = await promFs.readFilePromise("recipe.json");
        console.log(data,"\n");

        console.log("3. Append 'King David' to recipe.json:");
        data = await promFs.appendFilePromise("recipe.json", "King David");
        console.log(data,"\n");

        console.log("4. Read file recipe.json:");
        data = await promFs.readFilePromise("recipe.json");
        console.log(data,"\n");

        console.log("5. Delete recipe.json file:");
        data = await promFs.unlinkFilePromise("recipe.json");
        console.log(data,"\n");

        console.log("6. Read if recipe.json file exists:");
        data = await promFs.readFileIfExistsPromise("recipe.json");
        console.log(data);

    } catch (error) {
        console.log(error);
    }  
})(); 
