function queue(){
    this.data=[];
    this.add = function(record){
        this.data.push(record);
    }
    this.remove= function(){
        if(this.data!==[]){
            console.log(this.data.shift())
        }
    }
}
var queue = new queue();
queue.add(1);
queue.remove();
