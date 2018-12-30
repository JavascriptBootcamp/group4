var recipe = {
                name: "FrieFish",
                servings: 3,
                ingredients: ["Slmon","lemon","solt","paper"]
}

for (var key in recipe){
    if (typeof(recipe[key]) == "string" || typeof(recipe[key]) == "number"){
        console.log(key+':',recipe[key]);
    }
    if (typeof(recipe[key]) == "object"){
        console.log(key+':');
        recipe[key].forEach(function(element) {
            console.log("**"+element);
        }, this);
    }
}


// var str = "str";
// var num = 34;
// var arr = ["a1","a2","a3"];
// console.log (typeof(str));
// console.log (typeof(num));
// console.log (typeof(arr));