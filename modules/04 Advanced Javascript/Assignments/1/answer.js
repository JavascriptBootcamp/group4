// Answer 27

function Validator()
{
    Validator.prototype.isBool = function(input)
    {
        return typeof input === "boolean";
    }

    Validator.prototype.isError = function(input)
    {
        return input instanceof Error;
    }

    Validator.prototype.isNaN = function(input)
    {
        return isNaN(input);
    }

    Validator.prototype.isNull = function(input)
    {
        return input === null;
    }

    Validator.prototype.isNumber = function(input)
    {
        return !isNaN(input);
    }

    Validator.prototype.isObject = function(input)
    {
        return typeof input === "object";
    }

    Validator.prototype.isRegExp = function(input)
    {
        return input instanceof RegExp;
    }

    Validator.prototype.isChar = function(input)
    {
        return input.length === 1;
    }

    Validator.prototype.isSame = function(input1, input2)
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

// Answer 28

function BankAccount(number, owner)
{
    this.number = number;
    this.owner = owner;
    var currentBalanace = 0;
}

BankAccount.prototype.withdraw = function(amount) {
    this.currentBalanace -= amount;
}
BankAccount.prototype.deposite = function(amount) {
    this.currentBalanace += amount;
}
BankAccount.prototype.getBalance = function() {
    return this.currentBalanace;
}

// Test

var accounts = [];
accounts.push(new BankAccount(1, "Guy"), new BankAccount(2, "Shmulik"), new BankAccount(3, "David"));

console.log(accounts);

accounts.forEach(account => 
{
    account.deposit(1000);
})

accounts[0].withdraw(200);
accounts[1].withdraw(500);
accounts[2].withdraw(1500);

accounts.forEach(account =>
{
console.log("Account #:", account.number, "Account's owner:", account.owner, "Account's balance:", account.getBalance());
})



// Answer 29

function Video(title, uploader, seconds) {
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;
}

Video.prototype.watch = function () {
      console.log(this.uploader, "Watched all", this.seconds, "seconds of", this.title + "!");
    }

try {
    var videoObject1 = new Video("Harry Plotter", "Guy", 190);
    videoObject1.watch();

    var videoObject2 = new Video("Green Mile", "Mariya", 235);
    videoObject2.watch();

    var videoObjectArr = [];

    for (var i = 0; i < 5; i++) {
        var videoObject = new Video(videoObject1.title, videoObject1.uploader, videoObject1.seconds);
        videoObjectArr.push(videoObject);
        videoObjectArr[i].watch();
    }
}
catch
{
    throw new Error("Oops ... An error occured");
}
