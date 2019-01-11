var Queue = function (){
    var dataQueue = [];
    this.add = function(data) {
      dataQueue.push(data);
    }
    this.remove = function() {
         return dataQueue.shift();
    }

}

function Stack(){
    dataStack = [];
    this.push = function(data) {
        dataStack.push(data);
    }
    this.pop = function() {
        return dataStack.pop();
    }
}

 var str = "abccb";
var strArr = str.split("");

var queue = new Queue();
var stack = new Stack();

strArr.forEach(function(item ,i){
   stack.push(item);
   queue.add(item);
})
var isPalindrom = strArr.every( function(item, i,arr){
    //console.log(i , queue.remove() , stack.pop());
    if(i < arr.length /2) 
      return queue.remove() == stack.pop();
    else
    return true;
    
} );

if (isPalindrom)
   console.log(str + " Is Palindrom");
else
console.log(str + " Is Not Palindrom");

