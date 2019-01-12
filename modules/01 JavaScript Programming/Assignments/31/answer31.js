function Queue(){

var queue = [];

this.add = function(val){
   queue.push(val);
}

 this.remove = function(){
   return queue.shift();
 }

}



var queue = new Queue();
queue.add(1);
var q = queue.remove();
console.log(q);