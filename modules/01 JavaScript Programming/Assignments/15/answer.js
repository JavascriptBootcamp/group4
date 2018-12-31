var favRecip = {
title:"mole",
servings:2,
ingredients:["cinnamon","cumin","coca"]
};

//console.log(favRecip.title);
//console.log(favRecip[1], favRecip.servings);
//console.log(favRecip.title);

for(var key in favRecip){
    if(key == "title")
    console.log(favRecip[key]);

    if(key == "servings")
    console.log("Serves:",favRecip[key]);

    if (key == "ingredients"){
        console.log("Ingredients:");
        favRecip[key].forEach(function(element) {
            console.log(element);
        });
        
    }
}