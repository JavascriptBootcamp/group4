//creates a copy of an object where the keys have become the values and the values the keys.
function replaceKeysWithValues(obj, keySuffix, valueSuffix) {
    var newObj = {};

    for (key in obj) {
        var newkey = obj[key];
        var newValue = key;
        newObj[newkey] = newValue;
    }

    return newObj;
}

obj1 = { "1": "value1", "2": "value2" };
obj2 = { "3": "value3", "4": "value4" };
obj3 = { "5": "value5", "6": "value6" };

console.log(replaceKeysWithValues.call(this, obj1));
console.log(replaceKeysWithValues.call(this, obj2));
console.log(replaceKeysWithValues.call(this, obj3));

console.log(replaceKeysWithValues.apply(this, [obj1, 1, 2]));
console.log(replaceKeysWithValues.apply(this, [obj2, 1, 2]));
console.log(replaceKeysWithValues.apply(this, [obj3, 1, 2]));