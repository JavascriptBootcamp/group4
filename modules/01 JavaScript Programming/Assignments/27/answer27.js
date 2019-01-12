function Validator(value){

this.isBoolean=function(){
    return typeof value==='boolean';
}
this.isError=function(){
    return value instanceof Error;
}
this.isNaNv =function(){
    return isNaN(value);
}
this.isNull=function(){
    return value=== null;
}
this.isNumberv = function(value){
    return  typeof value == 'number';
}
this.isObject = function(value){
    return (typeof value == 'object');
}
var isJsonPureObj= this.isPureJson = function(value)
{
    if (typeof value!=="string")
        return false;
        try{
            JSON.parse(value);
            return true;
        }
        catch (error){
            return false;
        }
}

this.isRegExp = function(value){return (value instanceof RegExp)}
this.isChar = function(value){return ((value.length === 1) && ("abcdefghijklmnopqrstuvwxyz".includes(value)))}
this.areSameType = function(value2){return (typeof value === typeof value2)}



}
//---is boolean
var validate1=new Validator(1);
var validate2=new Validator(true);
console.log(validate1.isBoolean());
console.log(validate2.isBoolean());
//---is Error
var validate3=new Validator(1);
var validate4=new Validator(Error());
console.log(validate3.isError());
console.log(validate4.isError());
//---isNAN

var validate6=new Validator(1);
var validate7=new Validator(Error());
console.log(validate7.isNaNv());
console.log(validate6.isNaNv());

//--- isNull
var validate5=new Validator(1);
var validate8=new Validator(null);
console.log(validate5.isNull());
console.log(validate8.isNull());

//--- isNumber
var validateNum1=new Validator(10);
var validateNum2=new Validator(null);
console.log(validateNum1.isNumberv());
console.log(validateNum2.isNumberv());

//---isObject

var valiObj=new Validator({color:"pink"});
var validObj=new Validator(null);
console.log (valiObj.isObject());
console.log( validObj.isObject());



console.log(new Validator(`{"name":"Agatha"}`).isPureJson());
console.log(new Validator("").isPureJson());
console.log(new Validator(/\w+/).isRegExp());
console.log(new Validator("").isRegExp(20)());

console.log(new Validator('c').isChar());
console.log(new Validator(0).isChar());

console.log(new Validator('c').areSameType('p'));
console.log(new Validator('c').areSameType()); 
