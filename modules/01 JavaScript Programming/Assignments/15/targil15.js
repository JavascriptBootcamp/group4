
var recipe = {
    title : "Mole",
    servings : 10,
    ingredients  : ["cinnamon","cumin","cocoa"] 
}
console.log(recipe.title);
console.log("Serves: ", recipe.servings);
console.log("Ingredients: ");
for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]); 
}
