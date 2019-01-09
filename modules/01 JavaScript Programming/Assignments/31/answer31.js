function Queue() {
    this.data = [];
    this.add = function (value) {
        if (value === undefined)
            throw "You must enter a value";
        else
            return this.data.unshift(value);
    }
    this.remove = function () {
        if (this.isEmpty())
            throw "The Queue is Empty";
        else
            return this.data.pop();
    }
    this.isEmpty = function () {
        return this.data.length === 0;
    }
}

var queue = new Queue();
try {
    queue.add(1);
    console.log(queue.remove());
} catch (error) {
    console.log(error);
}
