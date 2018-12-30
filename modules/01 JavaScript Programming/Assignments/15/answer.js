var recipe = {
    title: 'Mole',
    servings: 2,
    ingredients: ['cinnamon', 'cumin', 'cocoa']
};

for(var key in recipe){
    if(key === 'title'){
        console.log(recipe[key]);
    }else if(key === 'servings'){
        console.log(key + ': ' + recipe[key]);
    }else{
        console.log(key,':');
        recipe[key].forEach((value) => {
            console.log(value);
        });
    }
}
