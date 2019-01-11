function viceVersa(keySuffix, valueSuffix){
    var values = Object.keys(this);
    var keys = Object.values(this);
    var cloneObj = {};
    keys.forEach((key, i) => {
        cloneObj[key] = values[i];
    });
    if(keySuffix){
        cloneObj[keySuffix] = valueSuffix;
    }
    return cloneObj;
}

var obj1 = {a1 : 'hi guy', 23 : true};
var obj2 = {'tr22' : 'ffff4 1', 25 : true, 30 : false};
var obj3 = {kate : 'perry', 'hi' : true, 34 : null};

console.log(viceVersa.call(obj1));// change the context
console.log(viceVersa.call(obj2));
console.log(viceVersa.call(obj3));

console.log(viceVersa.apply(obj1, ['a2', 'bye girl']));
console.log(viceVersa.apply(obj2, ['gogogo', 'backback']));
console.log(viceVersa.apply(obj3, ['false', 44]));
