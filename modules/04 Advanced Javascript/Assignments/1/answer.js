//modify the constructor from - group4/Modules/01 JavaScript Programming/Assignments/27
function Validator(){

    Validator.prototype.isBoolean = function(value){
        return typeof(value) === "boolean";
    }
    Validator.prototype.isError = function(value){
        return value instanceof Error;
    }
    Validator.prototype.isNaN = function(value){
        return isNaN(value);
    }
    Validator.prototype.isNull = function(value){
        return value === null;
    }
    Validator.prototype.isNumber = function(value){
        return typeof(value) === "number";
    }
    Validator.prototype.isObject = function(value){
        return typeof(value) === "object";
    }
    Validator.prototype.isPureJsonObj = function(value){
        try {
            var json = JSON.parse(value);
            return (typeof json === 'object');
        } catch (e) {
            return false;
        }
    }
    Validator.prototype.isRegExp = function(value){
        return value instanceof RegExp;
    }
    Validator.prototype.isChar = function(value){
        return value.length === 1 && typeof(value) === "string"; 
    }
    Validator.prototype.areSameTypes = function(value1, value2){
        return typeof(value1) === typeof(value2);
    }
}

//Validator testing
var validator = new Validator();

console.log("");
console.log("Boolean: " + validator.isBoolean(true)); //true
console.log("Boolean: " + validator.isBoolean("str")); //false
console.log("");

//modify the constructor from - group4/Modules/01 JavaScript Programming/Assignments/28
function BankAccount(accountNumber, ownerAccount){

    var balance = 0;
    this.accountNumber = accountNumber;
    this.ownerAccount = ownerAccount;
    BankAccount.prototype.withdraw = function(amount){
        balance -= amount;
    }
    BankAccount.prototype.deposit = function(amount){
        balance += amount;
    }
    BankAccount.prototype.getBalance = function(){
        return balance;
    }
}

//BankAccount testing
var bankAccount1 = new BankAccount(12345, "Moshe");
bankAccount1.deposit(1000);
bankAccount1.withdraw(200);
console.log("Account Number: " + bankAccount1.accountNumber + "\n" + "Owner Account: " 
            + bankAccount1.ownerAccount + "\n" + "Current Balance: " + bankAccount1.getBalance() + " NIS");
console.log("");

//modify the constructor from - group4/Modules/01 JavaScript Programming/Assignments/29
function Video(title, uploader, seconds){
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds; 

    Video.prototype.watch = function (sec) {
        try {
            console.log(`You watched all ${sec} seconds of ${this.title}!`);
        } catch (error) {
            console.log("Oops... An error occured");
        }
    }
}

//Video testing
var data = []
for (var i = 0; i < 5; i++) {
    var v = new Video("video "+i, "The neerd youtuber", 60 + Math.floor(Math.random() * (60)));
    data.push(v);  
}
data[0].watch(5);
data[1].watch(24);