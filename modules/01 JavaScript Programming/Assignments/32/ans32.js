//Answer 32
function Queue(){
    this.data = [];
    
    this.isEmpty = function(){
        return this.data.length === 0
    }
    this.add = function(value){
        this.data.push(value);
    }
    this.remove = function(){
        if(!this.isEmpty())
            return this.data.splice(0, 1);
        else
            console.log("Queue is empty!");
    }
}
function Stack(){
    this.data = [];
    
    this.isEmpty = function(){
        return this.data.length === 0
    }
    this.add = function(value){
        this.data.push(value);
    }
    this.pop = function(){
        if(!this.isEmpty())
            return this.data.splice(this.data.length - 1, 1);
        else
            console.log("Stack is empty!");
    }
}


function isPalindrome(str){
    var myStack = new Stack();
    var myQueue = new Queue();
    strArr = str.split('');
    strArr.forEach(elem => {
        myStack.add(elem);
        myQueue.add(elem);
    });
    while(!myQueue.isEmpty()){
        if(myQueue.remove().join('') !== myStack.pop().join(''))
            return false;
    }
    return true;
}

console.log(isPalindrome("abccba"));
console.log(isPalindrome("abccb"));

