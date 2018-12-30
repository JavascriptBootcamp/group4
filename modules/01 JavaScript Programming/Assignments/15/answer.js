var favoriteRecipe = 
{
    title : "Mafrum",
    serving : "8",
    ingredients : ["Potatoes","Sliced Meat","Paprika","Olive oil"],
}

console.log(favoriteRecipe.title);
console.log("Serves:", favoriteRecipe.serving);
console.log("Ingredients:");

favoriteRecipe.ingredients.forEach(function(element){
    console.log(element);
});
