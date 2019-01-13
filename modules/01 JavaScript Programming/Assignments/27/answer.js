function Validator()
{
    this.isBool = function(input)
    {
        return typeof input === "boolean";
    }

    this.isError = function(input)
    {
        return input instanceof Error;
    }

    this.isNaN = function(input)
    {
        return isNaN(input);
    }

    this.isNull = function(input)
    {
        return input === null;
    }

    this.isNumber = function(input)
    {
        return !isNaN(input);
    }

    this.isObject = function(input)
    {
        return typeof input === "object";
    }

    this.isRegExp = function(input)
    {
        return input instanceof RegExp;
    }

    this.isChar = function(input)
    {
        return input.length === 1;
    }

    this.isSame = function(input1, input2)
    {
        return typeof input1 === typeof input2;
    }
}

// Test

var theValidator = new Validator();

console.log("Is Bool type? A: ", theValidator.isBool(true));
console.log("Is Bool type? A: ", theValidator.isBool("string"));

console.log("Is Error type? A: ", theValidator.isError(new Error('blablabla')));
console.log("Is Error type? A: ", theValidator.isError('=]'));

console.log("Is NaN type? A: ", theValidator.isNaN("Guy"));
console.log("Is NaN type? A: ", theValidator.isNaN(53));

console.log("Is Null type? A: ", theValidator.isNull(null));
console.log("Is Null type? A: ", theValidator.isNull(":D"));

console.log("Is Number type? A: ", theValidator.isNumber(6));
console.log("Is Number type? A: ", theValidator.isNumber("LOL"));

console.log("Is Object type? A: ", theValidator.isObject({}));
console.log("Is Object type? A: ", theValidator.isObject("=]"));

console.log("Is RegExp type? A: ", theValidator.isRegExp(/./));
console.log("Is RegExp type? A: ", theValidator.isRegExp("wtf"));

console.log("Is Char type? A: ", theValidator.isChar(' '));
console.log("Is Char type? A: ", theValidator.isChar("null"));

console.log("Is the same type? A: ", theValidator.isSame(53,53));
console.log("Is the same type? A: ", theValidator.isSame(5, undefined));
