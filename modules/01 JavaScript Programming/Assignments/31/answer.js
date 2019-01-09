

function Queue(){
    this.queueItems = [];  // Creating empty array to hold queue items

    // Returns true if items array/queue is empty
    this.isEmpty = function() {
        return this.queueItems.length === 0; 
    }

    // Adds argument into items array
    this.add = function(item){
        return this.queueItems.push(item);
    }

    // If queue is not empty - Removes and returns first item of a queue 
    this.remove = function(){
        if (!this.isEmpty())  return this.queueItems.shift();
        else return 'ERROR: The queue is empty - no items to remove';    
    }
} 


var queue = new Queue();
queue.add(1);
console.log(queue.remove());



