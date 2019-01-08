function Validator() {
    this.isBoolean = function (value) {
        return typeof value === "boolean";
    }
    this.isError = function (value) {
        return value instanceof Error;
    }
    this.isNaN = function (value) {
        return isNaN(value);
    }
    this.isNull = function (value) {
        return value === null;
    }
    this.isNumber = function (value) {
        return !(isNaN(value));
    }
    this.isObject = function (value) {
        return typeof value === "object" && value !== null;
    }
    this.isPureJson = function isPureJson(value) {
        return toString.call(value) === "[object Object]";
    }
    this.isRegExp = function isRegExp(value) {
        return value instanceof RegExp;
    }
    this.isChar = function (value) {
        return typeof value === "string" && value.length === 1;
    }
    this.areSame = function (value1, value2) {
        return toString.call(value1) === toString.call(value2);
    }
}

var valid = new Validator();

console.log("Is Boolean:", valid.isBoolean(true));
console.log("Is Boolean:", valid.isBoolean("test") + "\n");

console.log("Is Error:", valid.isError(new Error("test")));
console.log("Is Error:", valid.isError("test") + "\n");

console.log("Is NaN:", valid.isNaN("test"));
console.log("Is NaN:", valid.isNaN(1) + "\n");

console.log("Is Null:", valid.isNull(null));
console.log("Is Null:", valid.isNull("test") + "\n");

console.log("Is Number:", valid.isNumber(1));
console.log("Is Number:", valid.isNumber("test") + "\n");

console.log("Is Object:", valid.isObject({ x: 1 }));
console.log("Is Object:", valid.isObject(function () { }) + "\n");

console.log("Is PureJson : ", valid.isPureJson({ x: 1 }));
console.log("Is PureJson : ", valid.isPureJson("{x:1}") + "\n");

console.log("Is RegExp : ", valid.isRegExp(/./));
console.log("Is RegExp : ", valid.isRegExp("test") + "\n");

console.log("Is Char : ", valid.isChar("1"));
console.log("Is Char : ", valid.isChar(1) + "\n");

console.log("Are Same : ", valid.areSame([], []));
console.log("Are Same : ", valid.areSame(function () { }, {}) + "\n");
