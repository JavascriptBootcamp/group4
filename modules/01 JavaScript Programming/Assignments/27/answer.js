

function Validator() {

    this.isBoolean = function(value) {
        return typeof value === "boolean" ? true : false;
    }

    this.isError = function(value){
        return value instanceof Error ? true : false;
    }

    this.isNaN = function(value){
        return isNaN(value);
    }

    this.isNull = function(value){
        return typeof value === "object" && value === null ? true : false;
    }

    this.isNumber = function(value){
        return typeof value === "number" ? true : false;
    }

    this.isObj = function(value){
        return typeof value === "object" && value!==null ? true : false;
    }

    this.isPureJson = function(value){
        try {
            JSON.parse(value);
        } 
        catch (e) {
            return false;
        }
        return true;
    }

    this.isRegExp = function(value){
        return toString.call(value) === '[object RegExp]'
    }

    this.isChar = function(value){
        return ( (typeof value === "string" &&  value.length === 1) || typeof value === "number")  
    }

    this.areSameType = function(val1, val2){
      return typeof val1 === typeof val2;
    }
}


var valid = new Validator();

console.log('\n');
console.log("boolean : " , valid.isBoolean(true));
console.log("boolean : " , valid.isBoolean('not boolean'));
console.log('\n');

console.log("error : " , valid.isError(new Error('This is an error')));
console.log("error : " , valid.isError("Not error"));
console.log('\n');

console.log("isNaN : " , valid.isNaN("Not a number")); 
console.log("isNaN : " , valid.isNaN("50"));
console.log('\n');

console.log("Null : " , valid.isNull(null));
console.log("Null : " , valid.isNull('Not null'));
console.log('\n');

console.log("isNumber : " , valid.isNumber(8));
console.log("isNumber : " , valid.isNumber('Not a number'));
console.log('\n'); 

console.log("isObj : " , valid.isObj({Name: 'David'}));
console.log("isObj : " , valid.isObj('Not object')); 
console.log('\n');

console.log("isPureJson : " , valid.isPureJson('{ "key1": "val1", "key2": "val2" }'));
console.log("isPureJson : " , valid.isPureJson({"key1":"val1"}));
console.log('\n');

console.log("isRegExp : " , valid.isRegExp(/regex/));
console.log("isRegExp : " , valid.isRegExp("/regex/"));
console.log('\n');

console.log("isChar : " , valid.isChar('D'));
console.log("isChar : " , valid.isChar('David'));
console.log('\n');

console.log("areSameType : " , valid.areSameType('10','ten'));
console.log("areSameType : " , valid.areSameType('10' , 10)); 
console.log('\n');
