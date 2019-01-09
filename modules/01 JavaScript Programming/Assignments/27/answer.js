function Validator()
{
    this.isBoolean = function(value){return (typeof value==="boolean")}
    this.isError = function(value){return (value instanceof Error)}
    this.isNanValue = function(value){return isNaN(value)}
    this.isNull = function(value){return (value === null)}
    this.isNumber = function(value){return (typeof value ==="number")}
    this.isObject = function(value){return (value.constructor === Object)}
    this.isPureJson = function(value)
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
    this.areSameType = function(value,value2){return (typeof value === typeof value2)}
}

var examples = new Validator();
console.log(`isBoolean for value: false - ${examples.isBoolean(false)}`);
console.log(`isBoolean for value: "false" - ${examples.isBoolean("false")}\n`);

console.log(`isError for value: Error() - ${examples.isError(Error())}`);
console.log(`isError for value: "Error()" - ${examples.isError("Error()")}\n`);

console.log(`isNan for value: "test" - ${examples.isNanValue("test")}`);
console.log(`isNan for value: 23 - ${examples.isNanValue(23)}\n`);

console.log(`isNull for value: null - ${examples.isNull(null)}`);
console.log(`isNull for value: undefined - ${examples.isNull(undefined)}\n`);

console.log(`isNumber for value: 29 - ${examples.isNumber(29)}`);
console.log(`isNumber for value: "29" - ${examples.isNumber("29")}\n`);

console.log(`isObject for value: {} - ${examples.isObject({})}`);
console.log(`isObject for value: [] - ${examples.isObject([])}\n`);

console.log(`isPureJson for value: '{"name":"John"}' - ${examples.isPureJson('{"name":"John"}')}`);
console.log(`isPureJson for value: 'SomeString' - ${examples.isPureJson('SomeString')}\n`);

console.log(`isRegExp for value: /\w+/ - ${examples.isRegExp(/\w+/)}`);
console.log(`isRegExp for value: 20 - ${examples.isRegExp(20)}\n`);

console.log(`isChar for value: 'n' - ${examples.isChar('n')}`);
console.log(`isChar for value: 'bn' - ${examples.isChar('bn')}\n`);

console.log(`areSameType for values: {}, [] - ${examples.areSameType({},[])}`);
console.log(`areSameType for values: "string", 22 - ${examples.areSameType("string", 22)}\n`);