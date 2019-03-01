function Validator() {


}


Validator.prototype.isBoolean = function (value) {
    return typeof (value) === "boolean";
}
Validator.prototype.isError = function (value) {
    return value instanceof Error;
}
Validator.prototype.isNaN = function (value) {
    return isNaN(value);
}
Validator.prototype.isNull = function (value) {
    return value === null;
}
Validator.prototype.isNumber = function (value) {
    return typeof (value) === "number";
}
Validator.prototype.isObject = function (value) {
    return typeof (value) === "object";
}
Validator.prototype.isPureJsonObj = function (value) {
    try {
        var json = JSON.parse(value);
        return (typeof json === 'object');
    } catch (e) {
        return false;
    }
}
Validator.prototype.isRegExp = function (value) {
    return value instanceof RegExp;
}
Validator.prototype.isChar = function (value) {
    return value.length === 1 && typeof (value) === "string";
}
Validator.prototype.areSameTypes = function (value1, value2) {
    return typeof (value1) === typeof (value2);
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
console.log("PureJson: " + validator.isPureJsonObj('{"age":"20"}')); //true
console.log("PureJson: " + validator.isPureJsonObj({ age: 20 })); //false

//RegExp
console.log("RegExp: " + validator.isRegExp(/\w*/gi)); //true
console.log("RegExp: " + validator.isRegExp("str")); //false

//Char
console.log("Char: " + validator.isChar("s")); //true
console.log("Char: " + validator.isChar("str")); //false

//SameTypes
console.log("SameTypes: " + validator.areSameTypes("hello", "2")); //true
console.log("SameTypes: " + validator.areSameTypes("hello", 2)); //false


//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");

function BankAccount(accountNumber, ownerAccount) {

    this.balance = 0;
    this.accountNumber = accountNumber;
    this.ownerAccount = ownerAccount;

}

BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
}
BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}
BankAccount.prototype.getBalance = function () {
    return this.balance;
}

var bankAccount1 = new BankAccount(12345, "Moshe");
var bankAccount2 = new BankAccount(34567, "Eli");
var bankAccount3 = new BankAccount(54321, "Mor");

bankAccount1.deposit(1000);
bankAccount2.deposit(1000);
bankAccount3.deposit(1000);

bankAccount1.withdraw(200);
bankAccount2.withdraw(500);
bankAccount3.withdraw(1500);

console.log("Account Number: " + bankAccount1.accountNumber + "\n" + "Owner Account: "
    + bankAccount1.ownerAccount + "\n" + "Current Balance: " + bankAccount1.getBalance() + " NIS");
console.log("Account Number: " + bankAccount2.accountNumber + "\n" + "Owner Account: "
    + bankAccount2.ownerAccount + "\n" + "Current Balance: " + bankAccount2.getBalance() + " NIS");
console.log("Account Number: " + bankAccount3.accountNumber + "\n" + "Owner Account: "
    + bankAccount3.ownerAccount + "\n" + "Current Balance: " + bankAccount3.getBalance() + " NIS");


//-----------------------------------------------------------------------------------
console.log("----------------------------------------------------------------------");

function Video(title, uploader, seconds) {
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;

}

Video.prototype.watch = function (sec) {
    try {
        console.log(`You watched all ${sec} seconds of ${this.title}!`);
    } catch (error) {
        console.log("Oops... An error occured");
    }
}

var data = []

for (var i = 0; i < 5; i++) {
    var v = new Video("video " + i, "The neerd youtuber", 60 + Math.floor(Math.random() * (60)));
    data.push(v);
}

data[0].watch(5);
data[1].watch(24);
