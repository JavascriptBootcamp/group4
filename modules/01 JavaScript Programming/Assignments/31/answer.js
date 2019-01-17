function Queue() {
    //first in first out
    this.queue = [];

    this.add = function (element) {
        this.queue.unshift(element);
    }

    this.remove = function () {
        this.queue.pop();
    }
    
}

var queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
queue.remove();
queue.remove();

console.log(queue);