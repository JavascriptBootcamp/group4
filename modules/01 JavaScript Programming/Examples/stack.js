function Stack(){
    this.data = [];
    this.push = function(record) {
        this.data.push(record);
    }
    this.pop = function() {
        return this.data.pop();
    }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop());