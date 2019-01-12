function Queue() {
    this.arr = [];

    this.add = function (value) {
        if (!value) {
            throw "Please enter any value";
        }

        this.arr.push(value);
    }

    this.remove = function () {
        if (this.arr.length === 0) {
            throw "Queue is empty!";
        }

        return this.arr.shift();
    }
}

var queue = new Queue();

try {
    queue.add(1);
    queue.add(3);
    queue.add(14);

    queue.remove(); //Output: 1
}
catch (exeption) {
    console.log("Error:", exeption);
}