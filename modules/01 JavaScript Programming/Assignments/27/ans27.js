//Answer 27
function Validator(){
    
    this.isBool = function(value){
        return typeof(value) === 'boolean';
    }
    this.isError = function(value){
        return value instanceof Error;
    }
    this.isNaN = function(value){
        return isNaN(value);
    }
    this.isNull = function(value){
        return value === null;
    }
    this.isNumber = function(value){
        return typeof(value) === 'number';
    }
    this.isObject = function(value){
        return typeof(value) === 'object';
    }
    this.isPureJson = function(value){
        try{
            JSON.parse(value);
        }
        catch(err){
            return false;
        }
        return true;   
    }
    this.isRegExp = function(value){
        return value instanceof RegExp;
    }
    this.isChar = function(value){
        return typeof(value) === 'string' && value.length === 1; 
    }
    this.isSameType = function(val1,val2){
        return typeof val1 === typeof val2;
    }
}


var valid = new Validator();

//bool test
if(valid.isBool(false)){
    console.log("Successful valudation for boolean!");
}
if(!valid.isBool("aaa")){
    console.log("Failed valudation for boolean!");
}

console.log("");
console.log("");

//error test
if(valid.isError(new Error("some error"))){
    console.log("Successful valudation for error!")
}
if(!valid.isError(true)){
    console.log("Failed valudation for error!")
}

console.log("");
console.log("");

//NaN test
if(valid.isNaN(0/0)){
    console.log("Successful valudation for NaN!");
}
if(!valid.isNaN(9999)){
    console.log("Failed valudation for NaN!");
}

console.log("");
console.log("");

//null test
if(valid.isNull(null)){
    console.log("Successful valudation for null!");
}
if(!valid.isNull(undefined)){
    console.log("Failed valudation for null!");
}

console.log("");
console.log("");

//Number test
if(valid.isNumber(999)){
    console.log("Successful valudation for number!");
}
if(!valid.isNumber("123")){
    console.log("Failed valudation for number!");
}

console.log("");
console.log("");

//Object test
if(valid.isObject({})){
    console.log("Successful valudation for object!");
}
if(!valid.isObject("123")){
    console.log("Failed valudation for object!");
}

console.log("");
console.log("");

//pure json test
if(valid.isPureJson('{ "name":"John", "age":30, "city":"New York"}')){
    console.log("Successful valudation for pure json!");
}
if(!valid.isPureJson({ "name":"John", "age":30, "city":"New York"})){
    console.log("Failed valudation for pure json!");
}

console.log("");
console.log("");

//is RegExp
if(valid.isRegExp(/\w+/)){
    console.log("Successful valudation for RegExp!");
}
if(!valid.isRegExp('asd')){
    console.log("Failed valudation for RegExp!");
}

console.log("");
console.log("");

//is char
if(valid.isChar('2')){
    console.log("Successful valudation for char!");
}
if(!valid.isChar('asd')){
    console.log("Failed valudation for char!");
}

console.log("");
console.log("");

//is same types
if(valid.isSameType(/\w+/,new RegExp('w+/'))){
    console.log("Successful valudation for same types!");
}
if(!valid.isSameType('asd',123)){
    console.log("Failed valudation for same types!");
}




