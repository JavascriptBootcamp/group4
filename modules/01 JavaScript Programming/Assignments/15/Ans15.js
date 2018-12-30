
let myFavRecipe = {
    title : "Pizza" ,
    servings : "2",
    ingredients : ["cheese","tommato","olives"]
}
console.log(myFavRecipe.title);
console.log(myFavRecipe.servings);
console.log(myFavRecipe.ingredients.forEach((elem) => {
        console.log(elem);
}));