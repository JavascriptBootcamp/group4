function Validator() {
    this.isBoolean = function(val) {
        return typeof val === "boolean" ;
    }
    this.isError = function(val) {
        try {
            return true;
        }
        catch (err) {
            return false;
        }
    }
    this.isNaN = function(val) {
        return isNaN(val);
    }
    this.isNull = function(val) {
        return val === null;
    }
    this.isNumber = function(val) {
        return typeof val === "number";
    }
    this.isObject = function(val) {
        return typeof val === "object";       
    }
    this.isPureJson = function(val) {
        try {
            var json = JSON.parse(val);
            return (typeof json === 'object');
        } catch (e) {
            return false;
        }
    }
    this.isRegExp = function(val) {
        var re = new RegExp("^([a-z0-9]{5,})$");
        return re.test(val);
    }
    this.isChar = function(val) {
        return (typeof val === "string" && val.length === 1);
    }
    this.areSameType = function(val1, val2) {
        return typeof val1 === typeof val2;
    }

}

var v1 = new Validator();

console.log(v1.isRegExp("12345"));

console.log("isBoolean: " + v1.isBoolean(true)); 
console.log("isBoolean: " + v1.isBoolean("Amir"));

console.log("isError: " + v1.isError(new Error("error")));
console.log("isError: " + v1.isError("error"));

console.log("isNaN: " + v1.isNaN("Amir"));
console.log("isNaN: " + v1.isNaN(8));

console.log("isNull: " + v1.isNull(null));
console.log("isNull: " + v1.isNull({}));

console.log("isNumber: " + v1.isNumber(20));
console.log("isNumber: " + v1.isNumber("20"));

console.log("isObject: " + v1.isObject({}));
console.log("isObject: " + v1.isObject("Amir")); 

console.log("isPureJson: " + v1.isPureJson('{"age":"20"}')); 
console.log("isPureJson: " + v1.isPureJson({age: 20}));

console.log("isRegExp: " + v1.isRegExp("%#42"));
console.log("isRegExp: " + v1.isRegExp("1234ab"));

console.log("isChar: " + v1.isChar("a"));
console.log("isChar: " + v1.isChar("Amir"));

console.log("areSameType : " + v1.areSameType("Amir", "1"));
console.log("areSameType : " + v1.areSameType("Amir", 10));
