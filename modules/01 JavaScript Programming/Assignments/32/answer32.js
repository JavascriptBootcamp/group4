function Queue(){

    this.queue = [];
    
    this.add = function(val){
        this.queue.push(val);
    }
    
     this.remove = function(){
       return this.queue.shift();
     }
    
}

function Stack(){
    this.data = [];
    this.add = function(val) {
        this.data.push(val);
    }
    this.remove = function() {
        return this.data.pop();
    }
}

function palindrome(val){

    var arr = val.trim().split("");
    var queue = new Queue();
    var stack = new Stack();
    var j = arr.length % 2 == 0 ? arr.length/2 : parseFloat(arr.length/2) + 0.5 ;
    for(var i=0;i<arr.length/2,j<arr.length;i++,j++){
        queue.add(arr[i]);
        stack.add(arr[j]);
    }
    for(var k =0;k<arr.length/2;k++){
        if(queue.remove() !== stack.remove()){
            return false;
        }
    }

    return true;
}



var str1 = "abccba"
console.log(palindrome(str1));

var str2 = "abccb" ;
console.log(palindrome(str2));


var str3 = "racecar" ;
console.log(palindrome(str3));




