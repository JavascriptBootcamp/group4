//Create an object to hold information on your favorite recipe.<br />
//It should have properties for title (a string), servings (a number), and ingredients (an array of strings).<br />
//On separate lines (one console.log statement for each), log the recipe information so it looks like:<br />

var recipe = {
    title:"salad",
    servings:0,
    ingredients:["cuccumber","mushrum","olive","tomato"]
}
console.log(recipe["title"])
console.log("serves:"+recipe.servings)
console.log("ingredients:")
for(var i =0;i<recipe.ingredients.length;i++){
    console.log(recipe.ingredients[i])

}
