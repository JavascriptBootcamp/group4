//Answer 31
function Queue(){
    this.data = [];
    
    this.isEmpty = function(){
        return this.data.length === 0
    }
    this.add = function(value){
        this.data.push(value);
        console.log(value + " was pushed to the queue.")
    }
    this.remove = function(){
        if(!this.isEmpty())
            return this.data.splice(0, 1);
        else
            console.log("Queue is empty!");
    }
}
//FIFO Queue
var queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
console.log("");
console.log(queue.remove() + " was removed from the queue.");
console.log(queue.remove() + " was removed from the queue.");
console.log(queue.remove() + " was removed from the queue.");
console.log("");
queue.remove()

