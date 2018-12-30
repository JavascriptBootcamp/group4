



var recipe={
    title : "pizza",
     servings : 13, 
     ingredients : ["water ","sugar","salt","salt","olive oil","flour"]

}

for( var key in recipe )
{
    switch (key)
    {
      case "servings":
        console.log("Serves: "+recipe[key]);
        break;
      case "ingredients":
         console.log(key+": ");
         recipe.ingredients.forEach(function(item)
        {
            console.log(item);
            
        });
        break;
        default:
        console.log(recipe[key]);
        

    }


}
