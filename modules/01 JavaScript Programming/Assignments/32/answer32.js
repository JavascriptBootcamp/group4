function Stack(){
    this.data = [];
    this.add = function(str){
        this.data.push(str);
    },
    this.remove = function(){
        if (this.data.length > 0){
            return this.data.pop();
        }
        else{
            return false;
        }
    }
} 


function Queue(){
    this.data = [];
    this.add = function(str){
        this.data.push(str);
    },
    this.remove = function(){
        if (this.data.length > 0){
            return this.data.shift();
        }
        else{
            return false;
        }
    }
} 


function isPolindromStack(str){
    var stack = new Stack();
    if (!str){
        console.log("insert valid string please");
        return false;
    }

    for(var i=0; i<str.length/2; i++){
        stack.add(str[i]);
    }
    for(var i=str.length/2; i<str.length; i++){
        if(str[i] !== stack.remove()){
            return false;
        }
    }
    return true;
}

function isPolindromQueue(str){
    var queue = new Queue();
    if (!str){
        console.log("insert valid string please");
        return false;
    }

    for(var i=0; i<str.length/2; i++){
        queue.add(str[i]);
    }
    for(var i=str.length; i>str.length/2; i--){
        if(str[i-1] !== queue.remove()){
            return false;
        }
    }
    return true;
}




console.log(isPolindromStack("abccba"));
console.log(isPolindromStack("abcfba"));

console.log(isPolindromQueue("aaa"));
console.log(isPolindromQueue("abcfba"));