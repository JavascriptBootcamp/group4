
var recipe  = {
    title: "Mole",
    serves:3,
    ingredients:["cinnamon","cumin","cocoa"]
}

// for (var key in recipe) {
//     console.log(recipe[key]);
// }

console.log(recipe.title);
console.log("serves:" +recipe.serves);
console.log("ingredients:");
recipe.ingredients.forEach(function (item){
    console.log(item);
});