
var Validator = function(){

 this.isBoolean = function(value){
      return  typeof value === "boolean";
 }

 this.isError = function(value){
      return myError instanceof Error;
 }

      this.isNaN = function(value){
      return  !(typeof value === "number");
      }

      this.isNull = function(value){
         return value === null;
      }

      this.isNumber = function(value){
      return  typeof value === "number";
      }

      this.isObject = function(value){
      return  typeof value === "object";
      }

      this.isJson = function(value){
       try{
          return  typeof JSON.parse(value) === "object";
         }
         catch(e) {
           return false;
       }
      }
    

      this.isRegExp = function(value){
      return  value instanceof RegExp;
      }

      this.isChar = function(value){
        return value.length === 1 && (value.match(/[a-z]/i) !== null);
      }

      this.isSame = function(value1 , value2){
      return  (typeof value1 === typeof value2);
      }
 }




var ob = new Validator();

var v_ch ="A";
var v_bool =  true;
var v_num = 100;
var v_null = null;
var v_reg = /[a-z]/i;
var v_json = '{"name":"aviyot","age":"39"}';
var v_Error = new Error('foo');
var v_arr =[1,2,3];


console.log(v_bool  + "is Boolean" + ob.isBoolean(v_bool));
console.log(v_num  + "is Boolean" + ob.isBoolean(v_num));



var myError = new Error('foo');
var myString = "Whatever";
console.log(myError + " is Error: " + ob.isError(myError));
console.log(myString + " is Error: " + ob.isError(myString));

console.log(v_ch + " is NaN: " + ob.isNaN(v_ch));
console.log(v_num+ " is NaN: " + ob.isNaN(v_num));

console.log(v_null + " is Null: " + ob.isNull(v_null));
console.log(v_bool + " is Null: " + ob.isNull(v_bool));


console.log(v_num + " is Number: "+ob.isNumber(v_num));
console.log(v_ch + "is Number: "+ ob.isNumber(v_num));


console.log(v_arr + " is Object: " + ob.isObject(v_arr));
console.log(v_num + " is Object: " + ob.isObject(v_num));


console.log( v_json + " is JSON: " + ob.isJson(v_json));
console.log( v_arr + " is JSON: " + ob.isJson(v_arr));


console.log(v_reg + " is RegExp: " + ob.isRegExp(v_reg));
console.log(v_ch + " is RegExp: " + ob.isRegExp(v_ch));


console.log(v_ch + " is Char: " + ob.isChar(v_ch));
console.log(v_num + "is Char: " + ob.isChar(v_num));

console.log(v_null + " " + v_arr + "is Same: " + ob.isSame(v_null,v_arr));
console.log(v_num + " " + v_ch + "is Same: " + ob.isSame(v_num,v_ch));

