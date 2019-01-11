function Queue(){

    this.data = [];
    this.add = function(record){
        this.data.push(record);
    }
    this.remove = function(){
        return this.data.shift();
    }
}

var queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
console.log(queue.remove());
console.log(queue.remove());
