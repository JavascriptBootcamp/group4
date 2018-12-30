var favoriteRecipe = {
    title: 'Pita with falafel',
    servings: 3,
    ingredients: ['pita', 'falafel', 'tomato', 'yellow pepper', 'tahini','pickles', 'limon']
};

var keyNum = 1;

for (var key in favoriteRecipe) {
    if (keyNum === 1) console.log(favoriteRecipe[key]);
    else if (keyNum === 2) console.log(key +':', favoriteRecipe[key]);
    else if (keyNum === 3) {
        console.log(key + ':');
        for (var i = 0; i < favoriteRecipe[key].length; i++) {
            console.log(favoriteRecipe[key][i]);
        }
    }

    keyNum++;   
}

