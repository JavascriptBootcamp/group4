var user1 = {
    name: "Mariya",
    age: 21,
    id: 123
};

var user2 = {
    name: "John",
    age: 16,
    id: 1234
};

var user3 = {
    name: "Daenerys",
    age: 14,
    id: 12345
};

function swapObjectKeysAndValues(keySuffix, valueSuffix) {
    var values = Object.values(this);
    var swappedObj = {};

    if (keySuffix) {
        values.forEach(element => {
            swappedObj[element + valueSuffix] = ((Object.keys(this).find(key => this[key] === element)) + keySuffix);
        });
    }
    else {
        values.forEach(element => {
            swappedObj[element] = Object.keys(this).find(key => this[key] === element);
        });
    }

    return swappedObj;
}

console.log(swapObjectKeysAndValues.call(user1));
console.log(swapObjectKeysAndValues.call(user2));
console.log(swapObjectKeysAndValues.call(user3));

console.log(swapObjectKeysAndValues.apply(user1, [" forever", " is my"]));
console.log(swapObjectKeysAndValues.apply(user2, [" forever", " is my"]));
console.log(swapObjectKeysAndValues.apply(user3, [" forever", " is my"]));