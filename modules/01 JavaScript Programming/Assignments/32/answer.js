function Queue() {
    //first in first out
    this.queue = [];

    this.add = function (element) {
        this.queue.unshift(element);
    }


    this.remove = function () {
        return this.queue.pop();
    }

    this.removeLast = function () {
        return this.queue.shift();
    }
}

function Stack() {
    //last in first out
    this.stack = [];

    this.add = function (element) {
        this.stack.push(element);
    }


    this.remove = function () {
        return this.stack.pop();
    }

    this.showTop = function () {
        var lastIndex = this.stack.length-1;
        return this.stack[lastIndex];
    }
}

function checkPalindromeWithQueue(str) {
    //check the input
    if (typeof str !== "string") {
        return false
    }

    var queue = new Queue();
    for (let i = 0; i < str.length; i++) {
        queue.add(str[i]);
    }
    
    for (let i = 0; i < queue.queue.length/2; i++) {
        var first = queue.remove();  
        var last = queue.removeLast();
        if(first!==last){
            return false;
        }
    }

    return true;

}

function checkPalindromeWithStack(str) {
    //check the input
    if (typeof str !== "string") {
        return false
    }

    var stack = new Stack();
    for (let i = 0; i < str.length/2; i++) {
        stack.add(str[i]);
        if (str[str.length-i-1]===stack.showTop()) {
            stack.remove();
        }
    }
    
    return stack.stack.length === 0 ? true : false;

}



//test

console.log("\ntest the checkPalindromeWithQueue function - "); 
console.log("\n'abccba' is a palindrome ? - "+ checkPalindromeWithQueue("abccba"));
console.log("'abccb' is a palindrome ? - "+checkPalindromeWithQueue("abccb"));

console.log("\ntest the checkPalindromeWithStack function - "); 
console.log("\n'abccba' is a palindrome ? - "+checkPalindromeWithStack("abccba"));
console.log("'abccb' is a palindrome ? - "+checkPalindromeWithStack("abccb"));
