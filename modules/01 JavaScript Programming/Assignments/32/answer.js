function Stack(){
    this.data = [];
    this.push = function(record) {
        this.data.push(record);
    }
    this.pop = function() {
        if(this.data.length !== 0)
            return this.data.pop();
    }
}

function Queue(){
    this.data = [];

     this.add = function(record){
        this.data.push(record);
    }
    this.remove =function(){
        if(this.data.length > 0){
            var removed = this.data[0];
            this.data.shift();
            return removed;
        }
    }
}

var bracketOf = function(char){
    switch (char) {
        case '{':
            return '}'
            break;
        case '(':
            return ')'
            break;
    
        default:
            return null;
            break;
    }
}

var isSupportedChar = function(char){
    return char === '(' || char === '{' || char === ')' || char === '}';
}
var isPalindrome = function(str){
    if( !(str.split('')).every(isSupportedChar)){
        return "Wrong input!";
    }
    if(str.length %2 !== 0){
        return false;
    }
    var bracketsCharsStack = new Stack();
    var openCharsQueue = new Queue();

    for(var i=0;i<str.length;i++){
        if(str[i] === '{' || str[i] === '('){
            bracketsCharsStack.push(str[i]);
        }
        if(str[i] === '}' || str[i] === ')'){
            openCharsQueue.add(str[i]);
        }
    }

    if(bracketsCharsStack.data.length !== openCharsQueue.data.length)
        return false;
    while(bracketsCharsStack.data.length > 0){
        if(bracketOf(bracketsCharsStack.pop()) !== openCharsQueue.remove()){
            return false;
        }
    }
    return true;
}

var str = '{{(({}))}}';
console.log(isPalindrome(str));
str = '{{((({})}})';
console.log(isPalindrome(str));






