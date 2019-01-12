function isPalindrome(str) {
    var isPalindrome = true;
    try{
        if(typeof str !== 'string'){
            isPalindrome = false;
            throw 'not a string!';
        }
        var stack = [];
        var queue = [];
        for(var i=0; i < str.length / 2; i++){
            stack.push(str[i]);
            queue.unshift(str[str.length - 1 - i]);
        }
        while(stack.length !== 0){
            if(stack.pop() !== queue.shift()){
                isPalindrome = false;
                break;
            }
        }
    }catch(ex){
        console.log(ex);
    }finally{
        return isPalindrome;
    }
}
