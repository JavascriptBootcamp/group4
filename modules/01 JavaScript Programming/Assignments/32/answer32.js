function Queue() {
    this.data = [];
    this.add = function (value) {
        if (value === undefined)
            throw "You must enter a value";
        else
            return this.data.push(value);
    }
    this.remove = function () {
        if (this.isEmpty())
            throw "The Queue is Empty";
        else
            return this.data.shift();
    }
    this.isEmpty = function () {
        return this.data.length === 0;
    }
}

function Stack() {
    this.data = [];
    this.add = function (value) {
        if (value === undefined)
            throw "You must enter a value";
        else
            return this.data.push(value);
    }
    this.remove = function () {
        if (this.isEmpty())
            throw "The Stack is Empty";
        else
            return this.data.pop();
    }
    this.isEmpty = function () {
        return this.data.length === 0;
    }
}

function isPalindrome(str) {
    if (str === undefined || str.length === 0)
        throw "You must enter a string";
    else
        arrStr = str.split('');

    arrStr.forEach(value => {
        try {
            stack.add(value);
            queue.add(value);
        } catch (error) {
            console.log(error);
        }
    });

    for (let i = 0; i < arrStr.length / 2; i++) {
        if (queue.remove() !== stack.remove())
            return "Not palindrome."
    }

    return "Palindrom."
}

var stack = new Stack();
var queue = new Queue();
try {
    console.log(isPalindrome("abccba"));
} catch (error) {
    console.log(error);
}
