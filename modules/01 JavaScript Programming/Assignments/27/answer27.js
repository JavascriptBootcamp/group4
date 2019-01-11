function Validator(){

this.is_Boolean = function(value){
      return typeof value === "boolean";
}

this.is_Error = function(value){
    return value instanceof Error || toString.call(value) === '[object Error]';
}

this.is_NaN = function(value){
    return isNaN(value) ;
}

this.is_null = function(value){
    return value === null;
}

this.is_Number = function(value){
    return typeof value === "number";
}

this.is_Object = function(value){
    return typeof value === "object";
}

this.is_JSON = function(value){
   return toString.call(value) === '[Object Object]';
}

this.is_RegExp = function(value){
    return toString.call(value) === '[object RegExp]';
}

this.is_Char = function(value){
    return value.length === 1 ;
}

this.is_sameValues = function(val_1,val_2){
    return val_1 === val_2 ;
}

}


var v =new Validator();
console.log("function is_Boolean returns",v.is_Boolean(true),"for boolean,else it returns",v.is_Boolean("x"));
console.log("function is_Error returns",v.is_Error(new Error("ex")),"for Error,else it returns",v.is_Error("x"));
console.log("function is_NaN returns",v.is_NaN(9),"for Number,else it returns",v.is_NaN("x"));
console.log("function is_null returns",v.is_null(null),"for null,else it returns",v.is_null("x"));
console.log("function is_Number returns",v.is_Number(9),"for Number,else it returns",v.is_Number("x"));
console.log("function is_Object returns",v.is_Object({}),"for Object,else it returns",v.is_Object("x"));
console.log("function is_JSON returns",v.is_JSON({x:5}),"for JSON,else it returns",v.is_JSON("x"));
console.log("function is_RegExp returns",v.is_RegExp(/\w+/),"for RegExp,else it returns",v.is_RegExp("x"));
console.log("function is_Char returns",v.is_Char("x"),"for Char,else it returns",v.is_Char("xvfvf"));
console.log("function is_sameValues returns",v.is_sameValues("x","x"),"for the same values,else it returns",v.is_sameValues("x","y"));