function Queue(){

    this.queue = [];
    this.add = function(value){
        this.queue.push(value);
    }
     this.remove = function(){
       return this.queue.shift();
     }
}
        
function Stack(){

    this.stack = [];
    this.add = function(value){
        this.stack.push(value);
    }     
    this.remove = function(){
       return this.stack.pop();
   }      
}

function palindrome(str){

    var arr = str.split("");
    var queue = new Queue();
    var stack = new Stack();
    for (var i=0;i<arr.length;i++){
        queue.add(arr[i]);
        stack.add(arr[i]);
    }

    for(var j =0;j<parseInt(arr.length/2);j++){
        if(queue.remove() !== stack.remove()){
            return false;
        }
    }
    return true;
}


var str = "abcba";
console.log(palindrome(str));
str = "aaaba";
console.log(palindrome(str));
