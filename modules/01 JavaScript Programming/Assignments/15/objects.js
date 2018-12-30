var recipe = 
{
    title: "Mole",
    Serves: 2,
    Ingredients: ["cinnamon", "cumin", "cocoa"]
};

for(key in recipe)
{
    if(!Array.isArray(recipe[key]))
    {
        console.log(recipe[key]);
    }
    else
    {
        recipe[key].forEach(function(element) {
            console.log(element);
        }, this);
    }
}