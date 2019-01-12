function Queue() {
    this.Q = [];
    this.add = function(value) {
        this.Q.push(value);
    };
    this.remove = function () {
        return this.Q.shift();
    };
}
