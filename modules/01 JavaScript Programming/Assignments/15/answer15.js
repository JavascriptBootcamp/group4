var Burger = {

title:"Burger King",
Serves:2,
Ingredients:[
    "bacon",
    "salad",
    "cheesh",
    "meet"
]
}

for(var k in Burger){
    if(k=="title"){
        console.log(Burger[k]);
    }
    else if(k=="Serves"){
        console.log(k + ":" + Burger[k]);
    }
    else{
        console.log(k + ":" );
        for(var i=0;i<Burger[k].length;i++){
            console.log(Burger[k][i])
        }
    }

}




