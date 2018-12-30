var recipe = {
    title: "Sushi",
    servings: 4,
    ingredients: ["rice", "salmon", "soy", "nuri"]
}

printRecipe(recipe);

function printRecipe(recipe) {
    console.log(recipe.title);
    console.log("Serves:", recipe.servings);
    console.log("Ingredients:");

    recipe.ingredients.forEach(function (element) {
        console.log(element);
    }, this);
}