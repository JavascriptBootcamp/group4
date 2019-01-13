function Validator() {
    //check whether a given value type is boolean or not.
    this.isBoolean = function (element) {
        return typeof element === "boolean";
    }

    //check whether a given value type is error or not.
    this.isError  = function (element) {
        return element instanceof Error;
    }

    //check whether a given value type is NaN or not.
    this.isNaN = function (element) {
        return isNaN(element);
    }

    //check whether a given value type is NaN or not.
    this.isNull = function (element) {
        return element ? false : true;
    }

    //check whether a given value type is number or not.
    this.isNumber = function (element) {
        return typeof element === "number";
    }

    //check whether a given value type is object or not.
    this.isObject  = function (element) {
        return typeof element === "object";
    }

    //check whether a given value type is json or not.
    this.isJson = function (element) {
        //JSON values cannot be one of the following data types: function, date, undefined
        var answer = this.isObject(element);

        if(this.isObject(element)) {
            for(key in element){
                var value = element[key];
                var typeofVal = typeof value;
                //check if the value is from the wrong data types
                if (typeofVal === "function" || value instanceof Date || typeofVal === "undefined"){
                    return false;
                }
                else if (this.isObject(value)) {//if the value is obj we need to check if he also a json
                    answer = this.isJson(value);
                }
            }
        }

        return answer;
    }

    //check whether a given value type is RegExp or not.
    this.isRegExp = function (element) {
        return element instanceof RegExp;
    }

    //check whether a given value type is char or not.
    this.isChar = function (element) {
        return typeof element === "string" ? element.length === 1 : false;
    }

    //check whether given value types are same or not.
    this.isEqualTypes = function (element1, element2) {
        return typeof element1 === typeof element2;
    }
    
}

var test = new Validator;

console.log("test isBoolean functionalty -");
console.log(test.isBoolean(true));
console.log(test.isBoolean(3)+"\n");

console.log("test isError functionalty -");
console.log(test.isError(new Error('Whoops!')));
console.log(test.isError(3) + "\n");

console.log("test isNaN functionalty -");
console.log(test.isNaN("hii"));
console.log(test.isNaN(3) + "\n");

console.log("test isNull functionalty -");
console.log(test.isNull(null));
console.log(test.isNull(3) + "\n");

console.log("test isNumber functionalty -");
console.log(test.isNumber("hii"));
console.log(test.isNumber(3) + "\n");

console.log("test isObject functionalty -");
console.log(test.isObject({ 1:"1" }) );
console.log(test.isObject(3) + "\n");

console.log("test isJson functionalty -");
console.log(test.isJson({ "employees": ["John", "Anna", "Peter"]}));
console.log(test.isJson({ "name": "John" }));
console.log(test.isJson({ "employee": { "name": "John", "age": 30, "city": "New York" } }));

console.log(test.isJson({ "employees": ["John", "undefind", undefined] }));
console.log(test.isJson({ "date": new Date }));
console.log(test.isJson({ "employee": { "name": "John", "age": 30, "fun": () => {} } }));
console.log(test.isJson(3) + "\n");

console.log("test isRegExp functionalty -");
console.log(test.isRegExp(/ab+c/));
console.log(test.isRegExp(new RegExp('ab+c')));
console.log(test.isRegExp(3) + "\n");

console.log("test isChar functionalty -");
console.log(test.isChar('c'));
console.log(test.isChar("true"));
console.log(test.isChar(3) + "\n");

console.log("test isEqualTypes functionalty -");
console.log(test.isEqualTypes('c', { "1" : "1"}));
console.log(test.isEqualTypes("true", 5));
console.log(test.isEqualTypes(3, 4) + "\n");