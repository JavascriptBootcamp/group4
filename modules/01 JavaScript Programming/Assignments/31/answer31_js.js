var Queue = function (){

    var dataQueue = [];

    this.add = function(data) {

      dataQueue.push(data);

    }

    this.remove = function() {

         return dataQueue.shift();
    }

}

var queue = new Queue();

queue.add(1);
queue.add(2);
queue.add(3);


console.log(queue.remove());
console.log(queue.remove());
console.log(queue.remove());