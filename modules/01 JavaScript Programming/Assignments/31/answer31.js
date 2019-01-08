function Queue(){
    this.data = [];
    this.add = function(item){
        return this.data.push(item);
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


var queue = new Queue();
queue.add(1);
console.log(queue.remove());
queue.add(2);
queue.add(3);
console.log(queue.remove());
console.log(queue.remove());
console.log(queue.remove());