function Validator() {

    this.isBoolean = function (value) {
        return typeof value === 'boolean';
    }

    this.isError = function (value) {
        return value instanceof Error;
    }

    this.isNotANumber = function (value) {
        return isNaN(value);
    }

    this.isNull = function (value) {
        return value === null;
    }

    this.isNumber = function (value) {
        return !isNaN(value);
    }

    this.isObject = function (value) {
        return typeof value === 'object';
    }

    this.isRegExp = function (value) {
        return value instanceof RegExp;
    }

    this.isChar = function (value) {
        return value.length === 1;
    }

    this.isSame = function (value1, value2) {
        return typeof value1 === typeof value2;
    }
}

var validator = new Validator();

console.log("Value type is boolean:", validator.isBoolean(true));
console.log("Value type is boolean:", validator.isBoolean("string"));

console.log("Value type is Error:", validator.isError(new Error('some error')));
console.log("Value type is Error:", validator.isError('some error'));

console.log("Value type is NaN:", validator.isNotANumber("NotANumber"));
console.log("Value type is NaN:", validator.isNotANumber(42));

console.log("Value type is Null:", validator.isNull(null));
console.log("Value type is Null:", validator.isNull('not null'));

console.log("Value type is Number:", validator.isNumber(42));
console.log("Value type is Number:", validator.isNumber('not a number'));

console.log("Value type is Object:", validator.isObject({}));
console.log("Value type is Object:", validator.isObject('object'));

console.log("Value type is RegExp:", validator.isRegExp(/./));
console.log("Value type is RegExp:", validator.isRegExp('RegExp'));

console.log("Value type is Char:", validator.isChar('['));
console.log("Value type is Char:", validator.isChar(123));

console.log("Values type are same:", validator.isSame([1, 2], [1, 2]));
console.log("Values type are same:", validator.isSame(1, '1'));