var str = "abccba";
var str2 = "abccb";
function checkspalindrome(str){
    var strArray = str.split('');
    for(var i=0,j=strArray.length; i<=j; i++,j--)
    {
        if(strArray[i] !== strArray[j-1])
        {
            return "not polindrom";
        }
    }
    return "polindrom";
}

console.log(checkspalindrome(str));
console.log(checkspalindrome(str2));