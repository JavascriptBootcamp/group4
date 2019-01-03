
var flag=true;
function palindrome(str) { 
    
    var arrStr = str.split('');
    var half = parseInt(arrStr.length/2)-1;
    for (var i = 0; i <= half; i++) {
        
        if(arrStr[i]!=arrStr[arrStr.length-i-1])
        {
            flag=false;
        }
    }
    return flag;
    }

    console.log(palindrome("abcacba"));