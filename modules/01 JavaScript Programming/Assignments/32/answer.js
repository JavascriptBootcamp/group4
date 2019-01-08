function stack(){
    this.data = [];
    this.push = function(record) {
        this.data.push(record);
    }
    this.pop = function() {
        return this.data.pop();
    }
}
function queue(){
    this.data=[];
    this.add = function(record){
        this.data.push(record);
    }
    this.remove= function(){
        if(this.data!==[]){
           return this.data.shift()
        }
    }
}
var stack = new stack();
var queue = new queue();
function ispal(chars){
    arrchars= [];
    for (var i=0;i<chars.length;i++){
        stack.push(chars[i])
    }
    for (var i=0;i<chars.length;i++){
        queue.add(chars[i]);
    }
    console.log(stack.data)
    console.log(queue.data)
    for(var i =0 ;i<chars.length/2;i++){
        if(stack.pop()!==queue.remove()){
            console.log(stack.pop())
            return "is not a pal"
        }
            
    }
    return "is a pal"
}
console.log(ispal("abfcba"));
