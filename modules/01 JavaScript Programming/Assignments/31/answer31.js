

function Queue(){

    this.queue = [];
    
    this.add = function(value){
       this.queue.push(value);
    }
    
     this.remove = function(){
       return this.queue.shift();
     }
    
    }
        
    var queue = new Queue();
    queue.add(1);
    var value = queue.remove();
    console.log(value); 
