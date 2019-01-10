//var stack = [];

function isPalindrom(string)
{
    var stack = string.split("");
    var queue = string.split("");
    for(var i=0;i<string.length;i++){
        if(queue.pop()!==stack.shift())
            return "not Palindrom";
    }
    return "Palindrom"
}

console.log(isPalindrom("offo"));