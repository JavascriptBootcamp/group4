var Queue = function() {
    this.storage = {};
    this.count = 0;
    this.lowestCount = 0;

    this.remove = function() {
        // Check to see if queue is empty
        if (this.count - this.lowestCount === 0) {
            return undefined;
        }
        var result = this.storage[this.lowestCount];
        delete this.storage[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    this.add = function(value) {
        // Check to see if value is defined
        if (value) {
            this.storage[this.count] = value;
            this.count++;
        }
    }
}

var queue = new Queue()
    queue.add(1)
    console.log(queue.remove());