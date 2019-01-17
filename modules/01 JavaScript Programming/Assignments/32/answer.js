function Queue()
{
    this.queue = [];

    this.add = function(value)
    {
        this.queue.push(value);
    }
     this.remove = function()
     {
       return this.queue.shift();
     }
}

function Stack()
{
    this.stack = [];

    this.add = function(value)
    {
        this.stack.push(value);
    }

    this.remove = function()
    {
       return this.stack.pop();
   }      
}

function isPalindrome(str)
{
    var queue = new Queue();
    var stack = new Stack();
    var isPalindromeStr = true;

    for (var i = 0; i < str.length; i++)
    {
        stack.add(str[i]);
        queue.add(str[i]);
    }

    for(var i = 0; i < str.length / 2; i++)
    {
        if(queue.remove() !== stack.remove())
        {
            isPalindromeStr = false;
            break;
        }
    }

    return isPalindromeStr;
}

//Test

console.log(isPalindrome("abccba"));
console.log(isPalindrome("abccb"));
