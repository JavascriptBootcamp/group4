function Validator(){
    this.isBoolean = function(variable){
        return typeof variable === "boolean" ? true : false;
    },
    this.isError = function(variable){
        return variable instanceof Error ? true : false;
    },
     this.isNaN = function(variable){
        return isNaN(variable);
    },
     this.isNull = function(variable){
        return typeof variable === "object" && variable===null ? true : false;
    },
    this.isNumber = function(variable){
        return typeof variable === "number" ? true : false;
    },
     this.isObj = function(variable){
        return typeof variable === "object" && variable!==null ? true : false;
    },
     this.isPureJson = function(variable){
        try {
            JSON.parse(variable);
            } 
        catch (e) {
            return false;
            }
        return true;
    },
    this.isRegExp = function(variable){
        return toString.call(variable) === '[object RegExp]'
    },
    this.isChar = function(variable){
        if (variable.length === 1 && typeof variable === "string" || typeof variable === "number"){
            return true;
        }
        else return false;
    },
    this.areSame = function(variable1 , variabl2){
      return typeof variable1===typeof variabl2;
    }
}

var valid = new Validator();
console.log("boolean : " ,valid.isBoolean(false));
console.log("boolean : " ,valid.isBoolean("test"));

console.log("error : " ,valid.isError(new Error('foo')));
console.log("error : " ,valid.isError("test"));

console.log("isNaN : " ,valid.isNaN("test")); 
console.log("isNaN : " ,valid.isNaN("50"));

console.log("Null : " ,valid.isNull(null));
console.log("Null : " ,valid.isNull(564));

console.log("isNumber : " ,valid.isNumber(50));
console.log("isNumber : " ,valid.isNumber("50")); 

console.log("isObj : " ,valid.isObj({number:3}));
console.log("isObj : " ,valid.isObj(function(){})); 

console.log("isPureJson : " ,valid.isPureJson('{ "Id": 1, "Name": "Coke" }'));
console.log("isPureJson : " ,valid.isPureJson({"Name":"gaby"}));

console.log("isRegExp : " ,valid.isRegExp(/west/));
console.log("isRegExp : " ,valid.isRegExp("/west/"));

console.log("isChar : " ,valid.isChar("5"));
console.log("isChar : " ,valid.isChar("55"));

console.log("areSame : " ,valid.areSame("55","test"));
console.log("areSame : " ,valid.areSame("55" ,55));