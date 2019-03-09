//27
function Validator() { }

Validator.prototype.isBoolean = function (value) {
    return typeof value === 'boolean';
}
Validator.prototype.isError = function (value) {
    return value instanceof Error;
}
Validator.prototype.isNotANumber = function (value) {
    return isNaN(value);
}
Validator.prototype.isNull = function (value) {
    return value === null;
}
Validator.prototype.isNumber = function (value) {
    return !isNaN(value);
}
Validator.prototype.isObject = function (value) {
    return typeof value === 'object';
}
Validator.prototype.isRegExp = function (value) {
    return value instanceof RegExp;
}
Validator.prototype.isChar = function (value) {
    return value.length === 1 && typeof value === 'string';
}
Validator.prototype.isSame = function (value1, value2) {
    return value1 === value2;
}

var validator = new Validator();
console.log("Value type is boolean:", validator.isBoolean(true));
console.log("Value type is boolean:", validator.isBoolean("string"));

console.log("Value type is Error:", validator.isError(new Error('some error')));
console.log("Value type is Error:", validator.isError('some error'));

console.log("Value type is NaN:", validator.isNotANumber("NotANumber"));
console.log("Value type is NaN:", validator.isNotANumber(42));

console.log("Value type is Null:", validator.isNull(null));
console.log("Value type is Null:", validator.isNull('not null'));

console.log("Value type is Number:", validator.isNumber(42));
console.log("Value type is Number:", validator.isNumber('not a number'));

console.log("Value type is Object:", validator.isObject({}));
console.log("Value type is Object:", validator.isObject('object'));

console.log("Value type is RegExp:", validator.isRegExp(/./));
console.log("Value type is RegExp:", validator.isRegExp('RegExp'));

console.log("Value type is Char:", validator.isChar('['));
console.log("Value type is Char:", validator.isChar(123));

console.log("Values type are same:", validator.isSame([1, 2], [1, 2]));
console.log("Values type are same:", validator.isSame(1, '1'));

//28
function BankAccount(number, owner) {
    this.number = number;
    this.owner = owner;
    this.balance = 0;
};

BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
}
BankAccount.prototype.deposite = function (amount) {
    this.balance += amount;
}
BankAccount.prototype.getBalance = function () {
    return this.balance;
}

var bankAccount1 = new BankAccount(1, 'Mariya');
var bankAccount2 = new BankAccount(2, 'John');
var bankAccount3 = new BankAccount(3, 'Mike');

var accountsArray = [bankAccount1, bankAccount2, bankAccount3];

accountsArray.forEach(element => {
    element.deposite(1000);
});

bankAccount1.withdraw(200);
bankAccount2.withdraw(500);
bankAccount3.withdraw(1500);

accountsArray.forEach(element => {
    console.log("Account number:", element.number, "Account owner:", element.owner);
    console.log("Balance:", element.getBalance());
});

//29
function Video(title, uploader, seconds) { //string, string, number
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;
}

Video.prototype.watch = function () {
    console.log(this.uploader, 'watch all', this.seconds, "seconds of", this.title);
}

try {
    var movieObj = {
        movieTitle: "IT",
        movieUploader: "Guy",
        movieSeconds: 220
    };

    var movieArray = [];
    var movie2 = new Video("Hello World", "Grisha", 110);
    var movie3 = new Video("2048", "Mariya", 110);
    var movie4 = new Video("Avatar", "Joe", 110);
    var movie5 = new Video("Star Wars", "Michael", 110);


    for (var i = 0; i < 5; i++) {
        movieArray.push(new Video(movieObj.movieTitle, movieObj.movieUploader, movieObj.movieSeconds));
    }
    movieArray.push(movie2);
    movieArray.push(movie3);
    movieArray.push(movie4);
    movieArray.push(movie5);

    for (var i = 0; i < movieArray.length; i++) {
        movieArray[i].watch();
    }
}
catch (exeption) {
    console.log("Ooops....", exeption);
}