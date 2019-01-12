function Queue()
{
    this.items=[];
    this.add=function(item)
    {
        this.items.push(item);

    };
    this.remove=function()
    {
        if(this.items.length>0)
        {
            return  this.items.shift();
        }
       else
       {
        console.log("ERROR!! queue is empty")
       return;
       }
    }

}
var queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
console.log(queue.remove());
console.log(queue.remove());
