var replace_Keys_and_Values = function(keySuffix,valueSuffix){

var obj = this; 
var newObj = {};
for(var key in obj){
newObj[obj[key]] = key;
}

if(keySuffix){
    newObj[keySuffix] = valueSuffix;
}
return newObj;
}

var obj1 ={
   name:"alon",
   age : "29",
   gender : "male"
}
var obj2 ={
    name:"din",
    age : "36",
    gender : "male"
 }
 var obj3 ={
    name:"rina",
    age : "22",
    gender : "female"
 }

console.log(replace_Keys_and_Values.call(obj1));
console.log(replace_Keys_and_Values.call(obj2));
console.log(replace_Keys_and_Values.call(obj3));

var arr1 = ["height",1.88];
console.log(replace_Keys_and_Values.apply(obj1,arr1));
var arr2 = ["height",1.80];
console.log(replace_Keys_and_Values.apply(obj2,arr2));
var arr3  = ["height",1.70];
console.log(replace_Keys_and_Values.apply(obj3,arr3));