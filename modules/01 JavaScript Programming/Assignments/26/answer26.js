var obj = {
    swapKeysValues: function (keySuffix, valueSuffix) {
        var newObj = {};

        for (var key in this) {
            newObj[this[key] + keySuffix] = key + valueSuffix;
        }
        return newObj;
    }
}

var obj1 = { name: "moshiko", age: 10 };
var obj2 = { name: "moshe", age: 20 };
var obj3 = { name: "shai", age: 30 };

//console.log(obj.swapKeysValues.call(obj1));
console.log(obj.swapKeysValues.apply(obj2,["key","value"]));
