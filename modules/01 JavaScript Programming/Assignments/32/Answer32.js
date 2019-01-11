function Stack(){

    this.data = [];
    this.push = function(record) {
        this.data.push(record);
    }
    this.pop = function() {
        return this.data.pop();
    }
}

function Queue(){

    this.data = [];
    this.add = function(record){
        this.data.push(record);
    }
    this.remove = function(){
        return this.data.shift();
    }
}

function isPalindrome(str){

    var stack = new Stack();
    var queue = new Queue();
    var arr = str.split('');
    
    for(var i=0; i<arr.length; i++){
        stack.push(arr[i]);
        queue.add(arr[i]);
    }
    
    for(var i=0; i<arr.length/2 ;i++){
       if(stack.pop() !== queue.remove())
            return " is not palindrome";
    }
    return " is palindrome";
}

var str1 = "abccba";
var str2 = "abccb";

console.log(str1 + isPalindrome(str1));
console.log(str2 + isPalindrome(str2));
