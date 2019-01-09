function objectOpCopier (keySuffix,valueSuffix)
{
    if (!valueSuffix){
        valueSuffix = "";
       }
       if (!keySuffix){
        keySuffix = "";
       }
    var key = Object.keys(this);
    var newObject = {};
    key.forEach(item => {newObject[this[item]+keySuffix] = item + valueSuffix;});
    return newObject;
}


var obj1 = {name:"ofek",age: "28"};
var obj2 = {name: "Harry Potter",year: "2005"};
var obj3 = {name: "Lord of the ring",year: "2001"}

console.log(objectOpCopier.call(obj1));
console.log(objectOpCopier.apply(obj2,["-KS","-VS"]));