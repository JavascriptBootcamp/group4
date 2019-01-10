
function Validator (){
    // Returns if a value is a boolean

    this.isBoolean =function(value) {
        return typeof value === 'boolean';
        }
    // Returns if a value is not a number
      this.isNaN=  function  (value) {
            return isNaN(value);

            }
    // Returns if a value is null
    this.isNull=  function  (value) {
        return value === null;
        }
    // Returns if a value is a regexp
    this.isRegExp= function (value) {
        return value && typeof value === 'object' && value.constructor === RegExp;
        }
    // Returns if value is an  object
      this.isObject= function (value) {
        return value !== null && typeof value === 'object' && Array.isArray(value) === false;
    }
    // Returns if value is a jason object
    this.isJson=function  (str) {
        try {
            return (JSON.parse(str) && !!str);
        } catch (e) {
            return false;
        }
    }
    // Returns if value is an error object
    this.isError=function  (value) {
    return value instanceof Error && typeof value.message !== 'undefined';
    }
 
     // Returns if value is an  object
    this.isNumber=function (value) {
        return typeof value === 'number';
      }
        // Returns if value is Char
    this.isLetter = function (str) {
        return str.length === 1 && this.isNaN(str);
        //c.toLowerCase()>='a' && c.toLowerCase()<='z';
      }
       // Returns if values are the same
    this.areTheSame=function (valueFirst,valueSec) {
        return typeof valueFirst === typeof valueSec;
      } 

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
console.log("PureJson: " + validator.isJson('{"age":"20"}')); //true
console.log("PureJson: " + validator.isJson({age: 20})); //false

//RegExp
console.log("RegExp: " + validator.isRegExp(/\w*/gi)); //true
console.log("RegExp: " + validator.isRegExp("str")); //false

//Char
console.log("Char: " + validator.isLetter('A')); //true
console.log("Char: " + validator.isLetter("yu")); //false

//SameTypes
console.log("SameTypes: " + validator.areTheSame("hello", "2")); //true
console.log("SameTypes: " + validator.areTheSame("hello", 2)); //false
