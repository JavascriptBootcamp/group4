function Validator(){
}

Validator.prototype.isBoolean = function(value){
    return typeof(value) === 'boolean';
};
Validator.prototype.isError = function(value){
    return value instanceof Error;
};
Validator.prototype.is_NaN = function is_NaN(value){
    return isNaN(value);
};
Validator.prototype.isNull = function is_null(value){
    return value === null;
};
Validator.prototype.isNumber = function is_number(value){
    return typeof(value) === 'number';
};
Validator.prototype.isObject = function is_object(value){
    return typeof(value) === 'object';
};
Validator.prototype.isPureJson = function isPureJson(value){
    return toString.call(value) === '[object Object]';// pure json object
};
Validator.prototype.isRegExp = function isRegExp(value){
    return value instanceof RegExp;//RegExp
};
Validator.prototype.isChar = function(value){
    return typeof(value) === 'string' && value.length === 1; //char
};
Validator.prototype.areSame = function(value1,value2){
    return typeof(value1) === typeof(value2);
};

var v = new Validator();

console.log(v.isObject('hello'));