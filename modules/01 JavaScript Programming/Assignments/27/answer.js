function Validator(){
    this.isBoolean = function(value){
        return typeof(value) === 'boolean';
    },
    this.isError = function(value){
        return value instanceof Error;
    },
    this.is_NaN = function is_NaN(value){
        return isNaN(value);
    },
    this.isNull = function is_null(value){
        return value === null;
    },
    this.isNumber = function is_number(value){
        return typeof(value) === 'number';
    },
    this.isObject = function is_object(value){
        return typeof(value) === 'object';
    },
    this.isPureJson = function isPureJson(value){
        return toString.call(value) === '[object Object]';// pure json object
    },
    this.isRegExp = function isRegExp(value){
        return value instanceof RegExp;//RegExp
    },
    this.isChar = function(value){
        return typeof(value) === 'string' && value.length === 1; //char
    },
    this.areSame = function(value1,value2){
        return typeof(value1) === typeof(value2);
    }
}


var valid = new Validator();
console.log("false is boolean? : " ,valid.isBoolean(false));
console.log("'test' is boolean? : " ,valid.isBoolean("test"));

console.log("new Error('foo') is error? : " ,valid.isError(new Error('foo')));
console.log("'test' is error? : " ,valid.isError("test"));

console.log("'test' isNaN? : " ,valid.is_NaN("test")); 
console.log("'50' isNaN? : " ,valid.is_NaN("50"));

console.log("'null' is null? : " ,valid.isNull(null));
console.log("564 is null? : " ,valid.isNull(564));

console.log("50 isNumber? : " ,valid.isNumber(50));
console.log("'50' isNumber? : " ,valid.isNumber("50")); 

console.log("3 isObj? : " ,valid.isObject({number:3}));
console.log("isObj : " ,valid.isObject(function(){})); 

console.log("{'Name':'gaby'} isPureJson? : " ,valid.isPureJson({'Name':'gaby'}));
console.log("{ 'Id': 1, 'Name': 'Coke' } isPureJson? : " ,valid.isPureJson("{ 'Id': 1, 'Name': 'Coke' }"));

console.log("/west/ isRegExp? : " ,valid.isRegExp(/west/));
console.log("'/west/' isRegExp? : " ,valid.isRegExp("/west/"));

console.log("'5' isChar? : " ,valid.isChar("5"));
console.log("'55' isChar? : " ,valid.isChar("55"));

console.log("'55', 'test' areSame? : " ,valid.areSame("55","test"));
console.log("'55' , 55 areSame? : " ,valid.areSame('55' ,55));
