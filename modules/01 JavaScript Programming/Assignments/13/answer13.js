function check_palindrome(pal){

var palflag = true;
if(pal.length % 2 != 0){
    palflag = false;
}
else{
    
        for(var j=pal.length/2, i=(pal.length/2)-1;j<pal.length;j++,i--){
             if(pal[i] != pal[j]){
                palflag = false;
                break;
             }
             
    }}

return palflag;

}

var result1 = check_palindrome("abccba");
var result2 = check_palindrome("abccb");

console.log(result1);
console.log(result2);