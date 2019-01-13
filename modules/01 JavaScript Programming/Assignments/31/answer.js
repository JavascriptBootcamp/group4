function Queue()
{
    this.queue = [];

    this.add = function(item)
    {
        this.queue.push(item);
    }

    this.remove = function()
    {
        if(this.queue.length === 0)
        {
            throw "Queue Underflow!";
        }

        return this.queue.shift();
    }
}

try
{
    var theQueue = new Queue();
    theQueue.add(5);
    theQueue.add(3);
    theQueue.add(9);

    theQueue.remove(); // removes 5
    theQueue.remove(); // removes 3
}
catch(ex)
{
    console.log(ex);
}
