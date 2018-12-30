var recipe = 
{
    title: "Mole",
    Serveings: 2,
    Ingredients: ["cinnamon", "cumin", "cocoa"]
};

for(key in recipe)
{
    if(!Array.isArray(recipe[key]))
    {
        var toPrint = recipe[key];
        if(key == "Serveings") 
            toPrint = "Servs:" + recipe[key];
        console.log(toPrint);
    }
    else
    {
        console.log(key + ":");
        recipe[key].forEach(function(element) {
            console.log(element);
        }, this);
    }
}