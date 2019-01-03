function isPalindrome(str){
    for(var i =0; i < str.length / 2; i++){
        if(str.charAt(i) !== str.charAt(str.length - 1 - i)){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('abccba'));
console.log(isPalindrome('abctcba'));
console.log(isPalindrome('abctcka'));
console.log(isPalindrome('abckba'));
