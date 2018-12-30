var recipe = {
    title : "Mole",
    servings : 2,
    ingredients : ["cinnamon","cumin","cocoa"]
}

console.log(recipe.title);
console.log(recipe.servings);

for(key in recipe){   
     if(key === "ingredients"){
        recipe[key].forEach(function(item,index) {
              console.log(item);
          });
     }
}

