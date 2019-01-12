function Queue(){
    var arr = [];

    this.add = function(value){
        arr.push(value);
    }

    this.remove = function(){
        return arr.shift();
    }
}




var queue = new Queue();
queue.add(1);
queue.add(3);
queue.add(14);

queue.remove(); //Output: 1
