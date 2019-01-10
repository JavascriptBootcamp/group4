function Queue()
{
    this.queue = [];
    this.add = function(item){this.queue.push(item)};
    this.remove = function(){return this.queue.pop()};
}

var queue = new Queue();
queue.add(1);
console.log(queue.remove());