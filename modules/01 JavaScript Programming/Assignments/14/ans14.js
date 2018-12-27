var myFav = ['blue','pizza','fotball'];
myFav.forEach((elem,index) =>{
    console.log("My #" + index + " choice is " + elem);

})
var res = "";
myFav.forEach((elem,index) =>{
    switch(index+1)
    {
        case 1:
            res += "My " + (index+1) +"st choice is " + elem + " , ";
            break;
        case 2:
            res += "My " + (index+1) +"nd choice is " + elem + " , ";
            break;
        case 3:
            res += "My " + (index+1) +"rd choice is " + elem + " , ";
            break;
    }

})
console.log(res);