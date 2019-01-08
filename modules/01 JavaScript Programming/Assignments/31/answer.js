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

var queue = new Queue();
//queue.remove();
queue.add(1);
console.log(queue.data);
console.log(queue.remove());
console.log(queue.data);

for(var i=1;i<=10;i++){
    queue.add(i);
}
for(var i=1;i<=10;i++){
    console.log(queue.data);
    queue.remove();
}