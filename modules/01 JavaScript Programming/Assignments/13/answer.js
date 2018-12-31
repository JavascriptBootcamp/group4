
var str = "abccb";

function isPalindrome(chekedStr){


var halfLength = ((chekedStr.length)/2);
  for (i = 0 ; i < halfLength ; i ++){
    //console.log(chekedStr[i], chekedStr[(chekedStr.length-1)-i]);
    if(chekedStr[i] !== chekedStr[(chekedStr.length-1)-i]){
   
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(str));