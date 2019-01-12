var valid = function () {

    this.isBoolean = function (value) {
        return (typeof value === 'boolean');
    }

    this.isError = function (value) {
        return (value instanceof Error);
    }

    this.isNan = function (value) {
        return (isNaN(value));
    }

    this.isNull = function (value) {
        return (value === null);
    }

    this.isNumber = function (value) {
        return (!isNaN(value));
    }

    this.isObject = function (value) {
        return (typeof value === 'object');
    }

     this.isjson = function (value) {
        return (toString.call(value) === '[object Object]');
    }
    
    this.isRegExp = function (value) {
        return (value instanceof RegExp);
    }

    this.isChar = function (value) {
        return (value.length === 1);
    }

    this.isSameValue = function (value1, value2) {
        return (typeof value1 === typeof value2);
    }
}

var valid = new valid();


console.log("is boolean: "+ valid.isBoolean(true));
console.log("is boolean: "+ valid.isBoolean(2));
console.log("is Error: "+ valid.isError('error'));
console.log("is Error: "+ valid.isError(new Error('error')));
console.log("is NaN: "+ valid.isNan('number'));
console.log("is NaN: "+ valid.isNan(6));
console.log("is Null: "+ valid.isNull(null));
console.log("is Null: "+ valid.isNull('not null'));
console.log("is Number: "+ valid.isNumber('number 15'));
console.log("is Number: "+ valid.isNumber(15));
console.log("is Object: "+ valid.isObject({obj:"hello"}));
console.log("is Object: "+ valid.isObject('obj'));
console.log("is pure json object? " + valid.isjson({name: 'Robert'}));
console.log("is pure json object? " + valid.isjson('Robert'));
console.log("is RegExp: "+ valid.isRegExp(/\n/));
console.log("is RegExp: "+valid.isRegExp('not RegExp'));
console.log("is Char: "+ valid.isChar("A"));
console.log("is Char: "+ valid.isChar("abc"));
console.log("value types are same? "+ valid.isSameValue(21 ,11));
console.log("value types are same?  "+ valid.isSameValue(4, "evya")); 
