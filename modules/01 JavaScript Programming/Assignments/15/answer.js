//Create an object to hold information on your favorite recipe.<br />
//It should have properties for title (a string), servings (a number), and ingredients (an array of strings).<br />
//On separate lines (one console.log statement for each), log the recipe information so it looks like:<br />
//<ul>
//<li>Mole</li>
//<li>Serves: 2</li>
//<li>Ingredients:</li>
//<li>cinnamon</li>
//<li>cumin</li>
//<li>cocoa</li>
//</ul>

var recipe = {
    title: "Salad",
    Servings: 2,
    ingredients: ["Chamember","Tomato","Onion"]
}

console.log (recipe.title);
console.log("Serves:" + recipe.Servings);
console.log("Ingredients:")
for(var i=0;i<recipe.ingredients.length;i++)
{
    var result = recipe.ingredients[i]
    console.log(result)
}
