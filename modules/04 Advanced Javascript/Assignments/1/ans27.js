function Validator() {

}

Validator.prototype.isBoolean = function (value) {
    return typeof (value) === "boolean";
}
Validator.prototype.isError = function (value) {
    return value instanceof Error;
}
Validator.prototype.isNaN = function (value) {
    return isNaN(value);
}
Validator.prototype.isNull = function (value) {
    return value === null;
}
Validator.prototype.isNumber = function (value) {
    return typeof (value) === "number";
}
Validator.prototype.isObject = function (value) {
    return typeof (value) === "object";
}
Validator.prototype.isPureJsonObj = function (value) {
    try {
        var json = JSON.parse(value);
        return (typeof json === 'object');
    } catch (e) {
        return false;
    }
}
Validator.prototype.isRegExp = function (value) {
    return value instanceof RegExp;
}
Validator.prototype.isChar = function (value) {
    return value.length === 1 && typeof (value) === "string";
}
Validator.prototype.areSameTypes = function (value1, value2) {
    return typeof (value1) === typeof (value2);
}


var validator = new Validator();

//Boolean
console.log("Boolean: " + validator.isBoolean(true)); //true
console.log("Boolean: " + validator.isBoolean("str")); //false

//Error
console.log("Error: " + validator.isError(new Error("error"))); //true
console.log("Error: " + validator.isError("error")); //false

//NaN
console.log("NaN: " + validator.isNaN("str")); //true
console.log("NaN: " + validator.isNaN(8)); //false

//Null
console.log("Null: " + validator.isNull(null)); //true
console.log("Null: " + validator.isNull({})); //false

//Number
console.log("Number: " + validator.isNumber(20)); //true
console.log("Number: " + validator.isNumber("20")); //false

//Object
console.log("Object: " + validator.isObject({})); //true
console.log("Object: " + validator.isObject("str")); //false

//Purejson
console.log("PureJson: " + validator.isPureJsonObj('{"age":"20"}')); //true
console.log("PureJson: " + validator.isPureJsonObj({ age: 20 })); //false

//RegExp
console.log("RegExp: " + validator.isRegExp(/\w*/gi)); //true
console.log("RegExp: " + validator.isRegExp("str")); //false

//Char
console.log("Char: " + validator.isChar("s")); //true
console.log("Char: " + validator.isChar("str")); //false

//SameTypes
console.log("SameTypes: " + validator.areSameTypes("hello", "2")); //true
console.log("SameTypes: " + validator.areSameTypes("hello", 2)); //false
